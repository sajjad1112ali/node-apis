const { gerErrorObj } = require('../errorResponses');

module.exports = {
  '/users': {
    post: {
      summary: 'Login',
      description: 'Login User',
      produces: ['application/json'],
      tags: ['User'],
      parameters: [
        {
          name: 'body',
          in: 'body',
          description: 'body object',
          schema: {
            $ref: '#/definitions/login',
          },
        },
      ],
      responses: {
        200: {
          description: 'successful operation',
          schema: {
            $ref: '#/definitions/authResponse',
          },
        },
        ...gerErrorObj(false),
      },
    },
  },
};
