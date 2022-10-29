'use client';
import * as React from 'react'
import Script from 'next/script';
import { useState, useEffect } from 'react';

export default function HtmlfromNotion(props) {

    const js =`function welcome() {
        console.log("clicked");
        localStorage.removeItem("userToken");
        localStorage.removeItem("userEmailSaved");
        window.location.reload();
        return false;
        }
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "7ebf4eb1-38f7-4c10-8fab-db71c20240ef";
        (function () {
        d = document;
        s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.body.appendChild(s);
        })();
        console.log("hhghhhhhhh");
        var AccessToken = localStorage.getItem("userToken");
        var EmailSaved = localStorage.getItem("userEmailSaved");
        const apikey = "83067ff0-ab00-465e-bf33-26942b8977e2";
        if (
        AccessToken == null &&
        location.pathname.split("/")[1].split(" - ")[0] == "log"
        ) {
        var mojoEl = document.createElement("div");
        mojoEl.setAttribute("id ", "mojoauth - passwordless - form ");
        mojoEl.setAttribute(
        "style ",
        "background - color:#2F3437;width: 100%;height: 100%;position: absolute;top: 0;"
        );
        document.getElementsByTagName("head")[0].appendChild(mojoEl);
        console.log("element created");
        var mojoauth = new MojoAuth(apikey, {
        language: "language_code",
        redirect_url: "https://jornadasdomar.pedro.gq/log-in",
        source: [
        {
        type: "email",
        feature: "magiclink"
        }
        ]
        });
        mojoauth.signIn().then((response) => {
        console.log("signed in", response);
        localStorage.setItem("userToken", response.oauth.access_token);
        localStorage.setItem("userEmailSaved", response.user.email);
        mojoEl.remove();
        window.location.reload();
        return false;
        });
        } else if (
        AccessToken != null &&
        location.pathname.split("/")[1].split("-")[0] == "log"
        ) {
        var mojoauth = new MojoAuth(apikey);
        mojoauth.verifyToken(AccessToken).then((response) => {
        if (!response.isValid || response.isValid == false) {
        console.log("user not logged in");
        localStorage.removeItem("userToken");
        localStorage.removeItem("userEmailSaved");
        window.location.reload();
        return false;
        } else {
        console.log("valid log in, proceed", response);
        if (document.getElementById("mojoauth-passwordless-form")) {
        document.getElementById("mojoauth-passwordless-form").outerHTML = "";
        console.log("removed mojo aftyer verification");
        }
        }
        });
        } else {
        if (document.getElementById("mojoauth-passwordless-form")) {
        document.getElementById("mojoauth-passwordless-form").outerHTML = "";
        console.log("removed mojo on simple else");
        }
        }
        let previousUrl = "";
        const observer = new MutationObserver(() => {
        if (window.location.href !== previousUrl) {
        console.log(
        "URL changed from " + previousUrl + " to " + window.location.href
        );
        previousUrl = window.location.href;
        if (location.pathname.split("/")[1].split("-")[0] != "log") {
        if (document.getElementById("mojoauth-passwordless-form")) {
        document.getElementById("mojoauth-passwordless-form").outerHTML = "";
        if (document.getElementById("mojoauth-login-container")) {
        document.getElementById("mojoauth-login-container").outerHTML = "";
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
        observer.observe(document, config);`
    // console.log("jssssssssaaaaaaaasssssssssssss", js)
    function createMarkup(c){
        return { __html: c };
      }
      let   html=`<div><style>
      .notion-block-93ecb7a733b146e8846df004c4e841a4 {
      max-width: none;
      max-height: none;
      width: 100vw
      }
      </style>
      <html>
      <head>
      <script type="text/javascript">
      function welcome() {
      console.log("clicked");
      localStorage.removeItem("userToken");
      localStorage.removeItem("userEmailSaved");
      window.location.reload();
      return false;
      }
      </script>
      <script type="text/javascript">
      window.$crisp = [];
      window.CRISP_WEBSITE_ID = "7ebf4eb1-38f7-4c10-8fab-db71c20240ef";
      (function() {
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
        const apikey = "test-719a9ce7-f1d9-4044-bc09-783779c4f9bb"
        // If we don't find access token we open acess to do the login
        if (AccessToken == null) {
          //add mojo div
          var mojoEl = document.createElement("div");
          mojoEl.setAttribute('id', 'mojoauth-passwordless-form');
          mojoEl.setAttribute('style', 'background-color: cadetblue; width: 100%; height: 100%; position: absolute; top: 0;z-index:1;');
          document.body.appendChild(mojoEl);
          var mojoauth = new MojoAuth(apikey, {
            language: 'language_code',
            redirect_url: "https://jornadasdomar.gq",
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
        } else if (AccessToken != null && window.location.href == "https://jornadasdomar.gq/log-in") {
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
              document.getElementById("mojoauth-passwordless-form").remove();
              console.log("removed mojo aftyer verification");
            }
          });
        } else { //remove mojo
          document.getElementById('mojoauth-passwordless-form').outerHTML = ''; 
          console.log("removed mojo on simple else");
        }
      </script>
      <script type="text/javascript">
      let previousUrl = "";
      const observer = new MutationObserver(() => {
      if (window.location.href !== previousUrl) {
      console.log("URL changed from " + previousUrl + " to " + window.location.href);
      previousUrl = window.location.href;
      if ((location.pathname.split("/")[1].split("-")[0] != "log")) {
      if (document.getElementById("mojoauth-passwordless-form")) {
      document.getElementById("mojoauth-passwordless-form").outerHTML = "";
      if (document.getElementById("mojoauth-login-container")) {
      document.getElementById("mojoauth-login-container").outerHTML = "";
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
      observer.observe(document, config);
      </script>
      </head>
      <body>
    //   <button onclick="welcome()"> Sair </button>
      </body>
      </html></div>`;

    
    return(
        <>
         <div dangerouslySetInnerHTML={createMarkup(html)}></div>
          {/* <h1>ddddddddddddddddd</h1> */}
        </>);
      
}
