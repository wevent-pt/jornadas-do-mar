import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'

import { IconContext } from '@react-icons/all-files'

export default class MyDocument extends Document {
  render() {
    const html = `
<script>
  function welcome() {
      console.log("clicked");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userEmailSaved");
      window.location.reload();
      return false;
  }
</script>

<head>
  <script type="text/javascript">
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "7ebf4eb1-38f7-4c10-8fab-db71c20240ef";
      (function () {
          d = document;
          s = d.createElement("script");
          s.src = "https://client.crisp.chat/l.js";
          s.async = 1;
          d.getElementsByTagName("head")[0].appendChild(s);
      })();
  </script>

  <script charset="UTF-8" src="https://cdn.mojoauth.com/js/mojoauth.min.js"></script>
  <script type="text/javascript">
      var AccessToken = localStorage.getItem("userToken");
      var EmailSaved = localStorage.getItem("userEmailSaved");
      const apikey = "83067ff0-ab00-465e-bf33-26942b8977e2"
      // If we don't find access token we open acess to do the login
      if (AccessToken == null && (location.pathname.split('/')[1].split('-')[0] == "log")) {
          //add mojo div
          var mojoEl = document.createElement("div");
          mojoEl.setAttribute('id', 'mojoauth-passwordless-form');
          mojoEl.setAttribute('style',
              'background-color: #2F3437; width: 100%; height: 100%; position: absolute; top: 0;');
          document.body.appendChild(mojoEl);
          var mojoauth = new MojoAuth(apikey, {
              language: 'language_code',
              redirect_url: "https://jornadasdomar.pedro.gq/log-in",
              source: [{
                  type: "email",
                  feature: "magiclink"
              }],
          })
          mojoauth.signIn().then(response => {
              console.log("signed in", response);
              //console.log(response.oauth.access_token);
              localStorage.setItem('userToken', response.oauth.access_token);
              localStorage.setItem('userEmailSaved', response.user.email);
              mojoEl.remove(); //remove element after login
              window.location.reload();
              return false;
          });
      } else if (AccessToken != null && (location.pathname.split('/')[1].split('-')[0] == "log")) {
          //has token, lets see if its valid if not, we remove the token and reload the page
          var mojoauth = new MojoAuth(apikey);
          // Use verifyToken() for token verification
          mojoauth.verifyToken(AccessToken).then(response => {
              if (!response.isValid || response.isValid == false) {
                  console.log("user not logged in");
                  //remove credentials and reload
                  localStorage.removeItem("userToken");
                  localStorage.removeItem("userEmailSaved");
                  window.location.reload();
                  return false;
              } else {
                  console.log("valid log in, proceed", response); 
                  if (document.getElementById('mojoauth-passwordless-form')) {
                    document.getElementById('mojoauth-passwordless-form').outerHTML = '';
                    console.log("removed mojo aftyer verification");
                  }
                  
              }
          });
      } else { //remove mojo
          if (document.getElementById('mojoauth-passwordless-form')) {
              document.getElementById('mojoauth-passwordless-form').outerHTML = '';
              console.log("removed mojo on simple else");
          }

      }
  </script>
  <script type="text/javascript">
      let previousUrl = "";

      const observer = new MutationObserver(() => {
          if (window.location.href !== previousUrl) {
              console.log("URL changed from " + previousUrl + " to " + window.location.href);
              previousUrl = window.location.href;
              // do your thing
              if ((location.pathname.split('/')[1].split('-')[0] != "log")) {
                  //remove mojo div
                  if (document.getElementById('mojoauth-passwordless-form')) {
                      document.getElementById('mojoauth-passwordless-form').outerHTML = '';
                      if(document.getElementById('mojoauth-login-container')){
                        document.getElementById('mojoauth-login-container').outerHTML = '';
                      }
                      console.log("removed mojo event");
                  }
              }
          }
      });
      const config = {
          subtree: true,
          childList: true
      };

      // start observing change
      observer.observe(document, config);
  </script>
</head>

<body>
  <button onclick="welcome()"> Welcome to our website </button>
</body>
<style>
.notion-block-93ecb7a733b146e8846df004c4e841a4{
  max-width: none;
  max-height: none;
  width: 100vw;
}
</style>
<!--<style>
  /* :root {
      --bg-color: #f6f6f6;
      --fg-color: #373530;
  }

  body {
      overflow: scroll;
      overflow-x: hidden !important;
      scrollbar-width: none;
      background-color: #FCFCF4 !important;
  }

  body::-webkit-scrollbar {
      width: 0em;
  }

  .notion-frame {
      background-color: #FCFCF4 !important;
  }

  .notion-page {
      /*width: 100% !important;*/
      margin-top: 0% !important;
      background-color: #FCFCF4 !important;
      scroll-snap-type: y !important;
  }

  .notion {
      font-size: 16px;
  }

  .notion-title {
      display: none;
  }

  .index-page .notion-page-link {
      display: none;
  }

  .notion-page-icon-inline {
      display: none;
  }

  .notion-collection-card {
      box-shadow: none !important;
  }

  .notion-collection-card-property {
      display: flex;
      justify-content: center;
  }

  .notion-callout {
      border-radius: 8px !important;
      background-color: #822BDD !important;
      color: white !important;
      width: 100% !important;
      justify-content: center !important;
      box-shadow: 0 10px 20px -10px #516Bbe !important;
  }

  .notion-callout .notion-link {
      opacity: 1 !important;
      font-size: 18px;
      border: none;
  }

  .notion-callout:hover {
      background-color: #a175d1 !important;
  }

  .notion-callout-text {
      display: flex;
      justify-content: center;
  }

  /*hero image block*/
  .notion-block-93ecb7a733b146e8846df004c4e841a4 {
      width: 100vw !important;
      height: 100vh !important;
      background-image: url('https://user-images.githubusercontent.com/25424969/197489563-19eddc09-a5f1-4855-9a96-82df1ab46dc6.jpg');
      background-repeat: no-repeat;
      background-size: cover;
      background-position: center center;
      image-rendering: -webkit-optimize-contrast;
      scroll-snap-align: start !important;
  }

  .notion-block-93ecb7a733b146e8846df004c4e841a4>div {
      opacity: 0;
  }



  iframe {
      pointer-events: unset !important;
      /*add this so the embeds can be clickable*/
  } */
</style>-->`
    function createMarkup(c){
      return { __html: c };
    }
    return (
      <IconContext.Provider value={{ style: { verticalAlign: 'middle' } }}>
        <Html lang='en'>
          <Head>
            <link rel='shortcut icon' href='/favicon.ico' />
            <link
              rel='icon'
              type='image/png'
              sizes='32x32'
              href='favicon.png'
            />

            <link rel='manifest' href='/manifest.json' />
          </Head>

          <body>

            <script
              dangerouslySetInnerHTML={{
                __html: `
/** Inlined version of noflash.js from use-dark-mode */
;(function () {
  var storageKey = 'darkMode'
  var classNameDark = 'dark-mode'
  var classNameLight = 'light-mode'
  function setClassOnDocumentBody(darkMode) {
    document.body.classList.add(darkMode ? classNameDark : classNameLight)
    document.body.classList.remove(darkMode ? classNameLight : classNameDark)
  }
  var preferDarkQuery = '(prefers-color-scheme: dark)'
  var mql = window.matchMedia(preferDarkQuery)
  var supportsColorSchemeQuery = mql.media === preferDarkQuery
  var localStorageTheme = null
  try {
    localStorageTheme = localStorage.getItem(storageKey)
  } catch (err) {}
  var localStorageExists = localStorageTheme !== null
  if (localStorageExists) {
    localStorageTheme = JSON.parse(localStorageTheme)
  }
  // Determine the source of truth
  if (localStorageExists) {
    // source of truth from localStorage
    setClassOnDocumentBody(localStorageTheme)
  } else if (supportsColorSchemeQuery) {
    // source of truth from system
    setClassOnDocumentBody(mql.matches)
    localStorage.setItem(storageKey, mql.matches)
  } else {
    // source of truth from document.body
    var isDarkMode = document.body.classList.contains(classNameDark)
    localStorage.setItem(storageKey, JSON.stringify(isDarkMode))
  }
})();
`
              }}
            />
            <Main />

            <NextScript />
            <div dangerouslySetInnerHTML={createMarkup(html)}></div>
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
