// swagger.js
const swaggerAutogen = require('swagger-autogen')();
const routes = require('../routes/contacts');

const doc = {
  info: {
    title: 'My API Documentation',
    description: 'API documentation for my Node.js application',
  },
  host: 'localhost:8080',
  basePath: '/',
  schemes: ['http'],
};

const outputFile = './swagger.json';
// generate swagger.json
swaggerAutogen(outputFile, routes, doc);