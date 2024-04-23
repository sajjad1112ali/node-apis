const { gerErrorObj } = require('../errorResponses');

module.exports = {
  '/blogs': {
    get: {
      summary: 'Fetch blogs',
      description: 'Return the list of blogs with pagination details',
      produces: ['application/json'],
      tags: ['Blog'],
      parameters: [],
      security: [],
      responses: {
        200: {
          description: 'successful operation',
          schema: {
            $ref: '#/definitions/getBlogs',
          },
        },
        ...gerErrorObj(false),
      },
    },
  },
};
