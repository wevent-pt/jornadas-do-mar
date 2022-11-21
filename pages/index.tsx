import * as React from 'react'

import { NotionPage } from '@/components/NotionPage'
import { domain } from '@/lib/config'
import { resolveNotionPage } from '@/lib/resolve-notion-page'

// import HtmlfromNotion from '@/components/HtmlfromNotion'

export const getStaticProps = async () => {
  try {
    const props = await resolveNotionPage(domain);

    const userData = {
      email: 'diogocadavez@hotmail.com',
      nome: 'Diogo Cadavez',
      bilhete: 'none',
      Acesso_Componente_1:'no', 
    }

    const env = process.env.NODE_ENV;

    let url = null;

    if(env == 'development'){
      url = "http://localhost:3000/api/updateUserTable"; 
    }
    else{
      url = "https://mar.pedro.gq/api/updateUserTable"
    }

    const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: 'application/json',
        },
        body: JSON.stringify(userData),
      });

    const data = await response.json();

    console.log('*****Data: ', data);

    return { props, revalidate: 10 }
  } catch (err) {
    console.error('page error', domain, err)

    // we don't want to publish the error version of this page, so
    // let next.js know explicitly that incremental SSG failed
    throw err
  }
}

export default function NotionDomainPage(props) {
  // function createMarkup(c){
  //     return { __html: c };
  //   }
  return (
  <>
    {/* <div dangerouslySetInnerHTML={createMarkup(props.htmlToPage)}></div> */}
    <NotionPage {...props} /> 
    {/*<HtmlfromNotion {...props}/>*/}
  </>)
}
