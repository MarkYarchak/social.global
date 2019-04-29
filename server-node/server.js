const http = require('http');

const server = new http.Server();
const express = require('express');
const exphbs = require('express-handlebars');
const fs = require('fs');

const app = express();
const port = 3000;

// app.get('/', (request, response) => {
//   response.send('Hello from Node!');
// });
// app.listen(port, (err) => {
//   if (err) {
//     return err ? console.log('something bad happened', err) : '';
//   }
//   console.log(`server is listening on ${port}`);
// });
server.listen(4000, '127.0.0.1');
server.on('request', (request, response) => {
  response.end('Hello Node');
});
