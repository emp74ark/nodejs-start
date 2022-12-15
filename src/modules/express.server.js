const { port } = require('./variables');
const { platform, version } = require('./os');
const express = require('express');
const path = require('path');

const file = (page) => path.resolve(__dirname, '..', 'ejs', `${page}.ejs`);


function expressServer() {
  const server = express();
  server.set('view engine', 'ejs');

  server.listen(port, '127.0.0.1', (err) => {
    err ? console.log(err) : console.log(`
      ***
      Start EXPRESS
      at ${platform},
      version: ${version}
      ***
    `);
  });


  server.use((request, response) => {
    switch (request.url) {
      case '/':
        response.render(file('home'), { title: 'Home' });
        break;
      case '/contacts':
        response.render(file('contacts'), { title: 'Contacts' });
        break;
      case '/about':
        response.redirect('contacts');
        break;
      default:
        response
          .status(404)
          .render(file('error'), { title: 'Error' });
        break;
    }
  });

}

module.exports = expressServer();