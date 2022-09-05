let express = require('express');
let app = express();
const serverless = require('serverless-http');

app.get('/api',function(req,res) {
  res.send('holla');
})
app.get('/',function(req,res) {
  res.send('oiosajdojosjdioad');
})


module.exports.handler = serverless(app)