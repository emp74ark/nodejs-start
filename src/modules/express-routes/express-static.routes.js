const express = require('express');
const { file } = require('../express-controllers/express-path.controller');
const { records } = require('../variables');

const router = express.Router();

router.use((request, response) => {
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

module.exports = router;