const { gerErrorObj } = require('../errorResponses');

module.exports = {
  '/users/register': {
    post: {
      summary: 'Create account',
      description: 'Create brand new account',
      produces: ['application/json'],
      tags: ['User'],
      parameters: [
        {
          name: 'body',
          in: 'body',
          description: 'body object',
          schema: {
            $ref: '#/definitions/register',
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
