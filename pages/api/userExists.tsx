import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

const token = "secret_L9Vj4blk7LWEN5ds7Wiyb2YfSF0K8ZI0p30uqYAtJgv";
const notion_version = "2022-06-28";

const user_table_id = 'a323b367cea44d4591c9800aea402350';

const config = {
    method: null,
    url: null,
    headers: { 
      'Notion-Version': notion_version, 
      'Authorization': 'Bearer ' + token,

    },
    data: null,
};


// const trialData = {
//    "parent":{
//       "database_id": user_table_id
//    },
//    "properties":{
//       "Acesso-Componente-1":{
//          "id":"BMnm",
//          "type":"rich_text",
//          "rich_text":[
//             {
//                "type":"text",
//                "text":{
//                   "content":"no",
//                   "link":null
//                },
//                "annotations":{
//                   "bold":false,
//                   "italic":false,
//                   "strikethrough":false,
//                   "underline":false,
//                   "code":false,
//                   "color":"default"
//                },
//                "plain_text":"no",
//                "href":null
//             }
//          ]
//       },
//       "nome":{
//          "id":"NTP%3E",
//          "type":"rich_text",
//          "rich_text":[
//             {
//                "type":"text",
//                "text":{
//                   "content":"none",
//                   "link":null
//                },
//                "annotations":{
//                   "bold":false,
//                   "italic":false,
//                   "strikethrough":false,
//                   "underline":false,
//                   "code":false,
//                   "color":"default"
//                },
//                "plain_text":"none",
//                "href":null
//             }
//          ]
//       },
//       "email":{
//          "id":"title",
//          "type":"title",
//          "title":[
//             {
//                "type":"text",
//                "text":{
//                   "content":"none",
//                   "link":null
//                },
//                "annotations":{
//                   "bold":false,
//                   "italic":false,
//                   "strikethrough":false,
//                   "underline":false,
//                   "code":false,
//                   "color":"default"
//                },
//                "plain_text":"none",
//                "href":null
//             }
//          ]
//       },
//       "bilhete":{
//          "id":"%5CXo%3A",
//          "type":"rich_text",
//          "rich_text":[
//             {
//                "type":"text",
//                "text":{
//                   "content":"none",
//                   "link":null
//                },
//                "annotations":{
//                   "bold":false,
//                   "italic":false,
//                   "strikethrough":false,
//                   "underline":false,
//                   "code":false,
//                   "color":"default"
//                },
//                "plain_text":"none",
//                "href":null
//             }
//          ]
//       },
//    },
// }

/* Search the notion query to find a matching email
   
   Returns:

   if user exists returns obj:

      {
         status: true
         userInfo:{
            email: User email,
            nome: User name,
            bilhete: Tipo de bilhete
         }
      }

   if user not found returns obj:

      {
         status: false,
         userInfo: null
      }

*/

function getUser(results, userEmail){

   const returnObj = {
      status: null,
      userInfo: {
         email: null,
         nome: null,
         bilhete: null
      }
   }

   for(let i = 0 ; i < results.length ; i++){

      const emailProps = results[i].properties['email'];

      const email = emailProps[emailProps.type][0].text.content;

      if(email == userEmail){

         returnObj.status = true;

         const nomeProps= results[i].properties['nome'];
         const bilheteProps =  results[i].properties['bilhete'];

         const nome = nomeProps[nomeProps.type][0].text.content;
         const bilhete = bilheteProps[bilheteProps.type][0].text.content;

         returnObj.userInfo.email = userEmail;
         returnObj.userInfo.nome = nome;
         returnObj.userInfo.bilhete = bilhete;

         return returnObj;
         break;
      }
   }

   returnObj.status = false;
   returnObj.userInfo = null;

   return returnObj;
}


export default async function userExists(req: NextApiRequest, res: NextApiResponse){

	try{	


      // USE to check if user exists user: http://localhost:3000/api/userExists?email=teste@gmail.com
      // const userData = JSON.parse(req.body) || JSON.parse(req.query);
      const userData = req.query;
      const method = 'post';
      const url = 'https://api.notion.com/v1/databases/' + user_table_id + '/query';
      config.method = method;
      config.url = url;
      config.headers['Content-type'] = 'application/json'; 
      config.data = {};
      const resAxios = await axios(config);
      const userResult = await getUser(resAxios.data.results, userData.email);
      res.status(200).send(userResult);
	}
	catch(err){


		// res.status(400).json({ text: err });	
      res.status(400).json(err);
	}
	
}