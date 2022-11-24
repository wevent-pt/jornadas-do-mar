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

const trialData = {
   "parent":{
      "database_id": user_table_id
   },
   "properties":{
      "Acesso-Componente-1":{
         "id":"BMnm",
         "type":"rich_text",
         "rich_text":[
            {
               "type":"text",
               "text":{
                  "content":"no",
                  "link":null
               },
               "annotations":{
                  "bold":false,
                  "italic":false,
                  "strikethrough":false,
                  "underline":false,
                  "code":false,
                  "color":"default"
               },
               "plain_text":"no",
               "href":null
            }
         ]
      },
      "nome":{
         "id":"NTP%3E",
         "type":"rich_text",
         "rich_text":[
            {
               "type":"text",
               "text":{
                  "content":"none",
                  "link":null
               },
               "annotations":{
                  "bold":false,
                  "italic":false,
                  "strikethrough":false,
                  "underline":false,
                  "code":false,
                  "color":"default"
               },
               "plain_text":"none",
               "href":null
            }
         ]
      },
      "email":{
         "id":"title",
         "type":"title",
         "title":[
            {
               "type":"text",
               "text":{
                  "content":"none",
                  "link":null
               },
               "annotations":{
                  "bold":false,
                  "italic":false,
                  "strikethrough":false,
                  "underline":false,
                  "code":false,
                  "color":"default"
               },
               "plain_text":"none",
               "href":null
            }
         ]
      },
      "bilhete":{
         "id":"%5CXo%3A",
         "type":"rich_text",
         "rich_text":[
            {
               "type":"text",
               "text":{
                  "content":"none",
                  "link":null
               },
               "annotations":{
                  "bold":false,
                  "italic":false,
                  "strikethrough":false,
                  "underline":false,
                  "code":false,
                  "color":"default"
               },
               "plain_text":"none",
               "href":null
            }
         ]
      },
   },
}


async function joinUserData(userData: any){

    const {email, nome, bilhete, } = userData;

    const auxTrialData = trialData;

    auxTrialData.properties.nome['rich_text'][0].text.content = nome;

    auxTrialData.properties.nome['rich_text'][0]['plain_text'] = nome;

    auxTrialData.properties.email['title'][0].text.content = email;

    auxTrialData.properties.email['title'][0]['plain_text'] = email;

    auxTrialData.properties.bilhete['rich_text'][0].text.content = bilhete;

    auxTrialData.properties.bilhete['rich_text'][0]['plain_text'] = bilhete;

    return auxTrialData;

}

export default async function addUser(req: NextApiRequest, res: NextApiResponse){

	try{	

      // USE to add user :http://localhost:3000/api/updateUserTable?email=teste@gmail.com&nome=Teste&bilhete=none
      // const userData = JSON.parse(req.body) || JSON.parse(req.query);
      const userData = req.query;

      console.log('userData: ', userData);


      // const userData = {
      //      email: 'nortada'+Math.random()*157+'@hotmail.com',
      //      nome: 'Vitor Norte',
      //      bilhete: 'none',
      //      Acesso_Componente_1:'no', 
      //  }
      const method = 'post';
      const url = 'https://api.notion.com/v1/pages';
      config.method = method;
      config.url = url;
      config.headers['Content-type'] = 'application/json';
      config.data = await joinUserData(userData);
      const resAxios = await axios(config);
      res.status(200).send(resAxios);


	}
	catch(err){


		// res.status(400).json({ text: err });	
      res.status(400).json(err);
	}
	
}