const paths = require('./paths');
const definitions = require('./definitions');

const currentEnvironment = process.env.NODE_ENV;
let vars = {};
const prodEnviromentVars = { schemes: ['https'], host: 'nodeapis.imrancorporation.com' };
const localEnviromentVars = { schemes: ['http'], host: 'localhost:4000' };
vars = currentEnvironment === 'development' ? localEnviromentVars : prodEnviromentVars;

module.exports = {
  swagger: '2.0',
  info: {
    description:
      'This is a simple example NodeJS API project to demonstrate Swagger Documentation',
    version: '1.0.0',
    title: 'Sample API Documentation',
    contact: {
      email: 'sajjadramzan1211@gmail.com',
    },
    license: {},
  },
  schemes: vars.schemes,
  host: vars.host,
  basePath: '/v1',
  paths,
  definitions,
  securityDefinitions: {
    token: {
      name: 'authorization',
      in: 'header',
      type: 'apiKey',
      description: 'JWT Authorization header',
    },
  },
  security: [
    {
      token: [],
    },
  ],
};
