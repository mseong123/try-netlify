let express = require('express');
let app = express();
const serverless = require('serverless-http');

app.get('/api',function(req,res) {
  res.send('holla');
})


module.exports.handler = serverless(app)