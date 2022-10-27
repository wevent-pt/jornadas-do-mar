var axios = require('axios');
const express =  require('express');
const app = express();

var config = {
  method: 'post',
  url: 'https://api.notion.com/v1/databases/8fd27dafa3c947a1a15fd16c5936e63b/query',
  headers: { 
    'Notion-Version': '2022-06-28', 
    'Authorization': 'Bearer secret_PcR6XFEAByklNOngaxMBQ3QqjykzYKNOw7vgUkYVUZ2'
  }
};



async function callNotionApi(){


	const res = await axios(config);

	// console.log(JSON.stringify(res.data));

	var data = res.data;
	return data;
}

app.get('/api', async (req, res) => {
	
	var resNotion = await callNotionApi();
	res.send(resNotion);	
});


module.exports = app;