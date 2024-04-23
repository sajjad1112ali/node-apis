const { gerErrorObj } = require('../errorResponses');

module.exports = {
  '/users/forgot-password': {
    post: {
      summary: 'Forgot password',
      description: 'Request to send reset password email',
      produces: ['application/json'],
      tags: ['User'],
      parameters: [
        {
          name: 'body',
          in: 'body',
          description: 'body object',
          schema: {
            $ref: '#/definitions/forgoPassword',
          },
        },
      ],
      responses: {
        200: {
          description: 'successful operation',
          schema: {
            $ref: '#/definitions/deleteBlog',
          },
        },
        ...gerErrorObj(false),
      },
    },
  },
};
