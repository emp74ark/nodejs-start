const http = require('http');
const { platform, version } = require('./os');
const fs = require('fs');
const path = require('path');
require('dotenv').config();

const file = (url) => path.resolve(__dirname, '..', 'pages', `${url}.html`);

function httpServer() {
    http.createServer(function (request, response) {
        response.setHeader('Content-Type', 'text/html');
        let page = '';

        switch (request.url) {
            case '/':
                page = 'home';
                response.statusCode = 200;
                break;
            case '/contacts':
                page = 'contacts';
                response.statusCode = 200;
                break;
            case '/about':
                response.statusCode = 301;
                response.setHeader('Location', 'contacts');
                response.end();
                break;
            default:
                response.statusCode = 404;
                page = 'error';
                break;
        }

        fs.readFile(file(page), (err, data) => {
            if (err) {
                console.log(err);
                response.statusCode = 500;
                response.end();
            }
            response.write(data);
            response.end();
        });
    })
        .listen(process.env.PORT, '127.0.0.1', function (err) {
            err ? console.log(err) : console.log(`
        ***
        start webserver at ${platform},
        os version: ${version}
        ***
        `);
        });
}

module.exports = httpServer();