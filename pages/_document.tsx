import * as React from 'react'
import Document, { Head, Html, Main, NextScript } from 'next/document'
// import Script from 'next/script'
import { IconContext } from '@react-icons/all-files'


export default class MyDocument extends Document {
  render() {

    // function createMarkup(c){
    //   return { __html: c };
    // }
    
    // const   html=`<div><style>
    // .notion-block-93ecb7a733b146e8846df004c4e841a4 {
    // max-width: none;
    // max-height: none;
    // width: 100vw
    // }
    // </style>
    // <html>
    // <head>
    // <script type="text/javascript">
    // function welcome() {
    // console.log("clicked");
    // localStorage.removeItem("userToken");
    // localStorage.removeItem("userEmailSaved");
    // window.location.reload();
    // return false;
    // }
    // </script>
    // <script type="text/javascript">
    // window.$crisp = [];
    // window.CRISP_WEBSITE_ID = "7ebf4eb1-38f7-4c10-8fab-db71c20240ef";
    // (function() {
    // d = document;
    // s = d.createElement("script");
    // s.src = "https://client.crisp.chat/l.js";
    // s.async = 1;
    // d.getElementsByTagName("head")[0].appendChild(s);
    // })();
    // </script>
    // <script charset="UTF-8" src="https://cdn.mojoauth.com/js/mojoauth.min.js"></script>
    // <script type="text/javascript">

    //   var AccessToken = localStorage.getItem("userToken");
    //   var EmailSaved = localStorage.getItem("userEmailSaved");
    //   const apikey = "test-719a9ce7-f1d9-4044-bc09-783779c4f9bb"
    //   // If we don't find access token we open acess to do the login
    //   if (AccessToken == null && window.location.href == "https://jornadasdomar.gq/log-in") {
    //     //add mojo div
    //     var mojoEl = document.createElement("div");
    //     mojoEl.setAttribute('id', 'mojoauth-passwordless-form');
    //     mojoEl.setAttribute('style', 'background-color: cadetblue; width: 100%; height: 100%; position: absolute; top: 0;');
    //     document.body.appendChild(mojoEl);
    //     var mojoauth = new MojoAuth(apikey, {
    //       language: 'language_code',
    //       redirect_url: "https://jornadasdomar.gq",
    //       source: [{
    //         type: "email",
    //         feature: "magiclink"
    //       }],
    //     })
    //     mojoauth.signIn().then(response => {
    //       console.log("signed in", response);
    //       //console.log(response.oauth.access_token);
    //       localStorage.setItem('userToken', response.oauth.access_token);
    //       localStorage.setItem('userEmailSaved', response.user.email);
    //       mojoEl.remove(); //remove element after login
    //       window.location.reload();
    //       return false;
    //     });
    //   } else if (AccessToken != null && window.location.href == "https://jornadasdomar.gq/log-in") {
    //     //has token, lets see if its valid if not, we remove the token and reload the page
    //     var mojoauth = new MojoAuth(apikey);
    //     // Use verifyToken() for token verification
    //     mojoauth.verifyToken(AccessToken).then(response => {
    //       if (!response.isValid || response.isValid == false) {
    //         console.log("user not logged in");
    //         //remove credentials and reload
    //         localStorage.removeItem("userToken");
    //         localStorage.removeItem("userEmailSaved");
    //         window.location.reload();
    //         return false;
    //       } else {
    //         console.log("valid log in, proceed", response);
    //         document.getElementById("mojoauth-passwordless-form").remove();
    //         console.log("removed mojo aftyer verification");
    //       }
    //     });
    //   } else { //remove mojo
    //     document.getElementById('mojoauth-passwordless-form').outerHTML = ''; 
    //     console.log("removed mojo on simple else");
    //   }
    // </script>
    // <script type="text/javascript">
    // let previousUrl = "";
    // const observer = new MutationObserver(() => {
    // if (window.location.href !== previousUrl) {
    // console.log("URL changed from " + previousUrl + " to " + window.location.href);
    // previousUrl = window.location.href;
    // if ((location.pathname.split("/")[1].split("-")[0] != "log")) {
    // if (document.getElementById("mojoauth-passwordless-form")) {
    // document.getElementById("mojoauth-passwordless-form").outerHTML = "";
    // if (document.getElementById("mojoauth-login-container")) {
    // document.getElementById("mojoauth-login-container").outerHTML = "";
    // }
    // console.log("removed mojo event");
    // }
    // }
    // }
    // });
    // const config = {
    // subtree: true,
    // childList: true
    // };
    // observer.observe(document, config);
    // </script>
    // </head>
    // <body>
    // <button onclick="welcome()"> Sair </button>
    // </body>
    // </html></div>`;
      // const jsToPage = `function welcome() {
      //     console.log("clicked");
      //     localStorage.removeItem("userToken");
      //     localStorage.removeItem("userEmailSaved");
      //     window.location.reload();
      //     return false;
      //     }`
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

        {/* <div dangerouslySetInnerHTML={createMarkup(html)}></div> */}
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
            {/* <Script type="text/plain" strategy="lazyOnload" dangerouslySetInnerHTML={{ __html: html }}/> */}
{/*             
            <Script type="text/javascript" src="https://pub-7825ca8468f243a093f9019b6fb1bdb7.r2.dev/external/index.js" strategy="lazyOnload"/> */}
          </body>
        </Html>
      </IconContext.Provider>
    )
  }
}
