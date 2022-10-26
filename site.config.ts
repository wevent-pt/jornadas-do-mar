import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  rootNotionPageId: '1a8aba6b213f4d59be9df79ac9ec03d3',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Jornadas do Mar',
  domain: 'mar.pedro.gq',
  author: 'wevent',

  // open graph metadata (optional)
  description: 'A experiência do meio aquático do ano!',

  // social usernames (optional)
  twitter: '',
  github: '',
  linkedin: '',
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: 'https://s3.us-west-2.amazonaws.com/secure.notion-static.com/bd9719e2-8c85-4486-ae24-c2da21af2787/pWHhSQs.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=AKIAT73L2G45EIPT3X45%2F20221026%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20221026T155955Z&X-Amz-Expires=86400&X-Amz-Signature=e4b696ffd379cca965400e5ce82a394ffdad513ff6e18af78e4c0f19a8f424bd&X-Amz-SignedHeaders=host&response-content-disposition=filename%20%3D%22pWHhSQs.svg%22&x-id=GetObject',
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: 'f1199d37579b41cbabfc0b5174f4256a'
    },
    {
      title: 'Contact',
      pageId: '6a29ebcb935a4f0689fe661ab5f3b8d1'
    },
    {
      title: 'Login',
      pageId: '652dce0865f64a84a19bd0151821007b'
    }
  ]
})
