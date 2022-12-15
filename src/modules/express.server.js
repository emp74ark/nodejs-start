const { port } = require('./variables');
const { platform, version } = require('./os');
const express = require('express');
const path = require('path');

const file = (page) => path.resolve(__dirname, '..', 'pages', `${page}.html`);


function expressServer() {
  const server = express();
  
  server.listen(port, '127.0.0.1', (err) => {
    err ? console.log(err) : console.log(`
      ***
      Start EXPRESS
      at ${platform},
      version: ${version}
      ***
    `);
  });

  // server.get('/', (request, response) => {
  //   response.sendFile(file('home'));
  // });

  server.use((request, response) => {
    switch(request.url) {
      case '/':
        response.sendFile(file('home'));
        break;
      case '/contacts':
        response.sendFile(file('contacts'));
        break;
      case '/about':
        response.redirect('contacts');
        break;
      default:
        response
          .status(404)
          .sendFile(file('error'));
        break;
    }
  });

}

module.exports = expressServer();