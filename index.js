const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));  

app.listen(port, () => {
    console.log(`server starting at ${port}`);
})

app.get('/api', async(request, response) => {
  const apiurl = `https://api.wazirx.com/api/v2/tickers`;   //Call to api
  const  apiresponse = await fetch(apiurl);
  const apidata = await apiresponse.json();

  response.json(apidata);
});