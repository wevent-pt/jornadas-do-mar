import * as React from 'react'
import { GetStaticProps} from 'next'
// import Script from 'next/script'

import { NotionPage } from '@/components/NotionPage'
import { domain, isDev } from '@/lib/config'
import { getSiteMap } from '@/lib/get-site-map'
import { resolveNotionPage } from '@/lib/resolve-notion-page'
import { PageProps, Params } from '@/lib/types'
// import HtmlfromNotion from '@/components/HtmlfromNotion'

export const getStaticProps: GetStaticProps<PageProps, Params> = async (
  context
) => {
  const rawPageId = context.params.pageId as string

  try {
    const props = await resolveNotionPage(domain, rawPageId)

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, rawPageId, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export async function getStaticPaths() {
  if (isDev) {
    return {
      paths: [],
      fallback: true
    }
  }

  const siteMap = await getSiteMap()

  const staticPaths = {
    paths: Object.keys(siteMap.canonicalPageMap).map((pageId) => ({
      params: {
        pageId
      }
    })),
    // paths: [],
    fallback: true
  }

  console.log(staticPaths.paths)
  return staticPaths
}


export default function NotionDomainDynamicPage(props) {
  // function createMarkup(c){
  //     return { __html: c };
  //   }
    // componentDidMount() {
    //   $(this.helloElement).find('[data-my-script]').each(function forEachScript() {
    //     const script = $(this).text();
    //     window.eval(script);
    //   });
    // }
    
  return (
  <>
    {/* <div id="html-from-cloud" dangerouslySetInnerHTML={{__html: props.htmlToPage}}/> */}
    {/* <script type="text/javascript" dangerouslySetInnerHTML={{ __html: props.jsToPage }}></script> */}
    <NotionPage {...props} /> 
    {/*<HtmlfromNotion {...props}/>*/}
  </>)
}