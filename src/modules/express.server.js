const { records } = require('./variables');
const { platform, version } = require('./os');
const express = require('express');
const path = require('path');
require('dotenv').config();

const file = (page) => path.resolve(__dirname, '..', 'ejs', `${page}.ejs`);

function expressServer() {
  const server = express();
  server.set('view engine', 'ejs');

  server.listen(process.env.PORT, '127.0.0.1', (err) => {
    err ? console.log(err) : console.log(`
      ***
      Start EXPRESS
      at ${platform},
      version: ${version}
      ***
    `);
  });

  server.use((request, response, next) => {
    console.log(`Address: '${request.url}', port: ${process.env.PORT}, method: '${request.method}'`);
    next();
  });
  server.use(express.static(path.resolve(__dirname, '..', 'styles')));
  server.use(express.urlencoded({ extended: false }));

  server.get('/records/:id', (request, response) => {
    response.render(file('record'), { title: 'Record', record: records[0] });
  });

  server.post('/form', (request, response) => {
    const { title, text, date } = request.body;
    const record = {
      id: Date.now(),
      title,
      text,
      date
    };
    response.render(file('record'), { title: 'Record', record });
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
      case '/records':
        response.render(file('records'), { title: 'Records', records });
        break;
      case '/form':
        response.render(file('form'), { title: 'Create record' });
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