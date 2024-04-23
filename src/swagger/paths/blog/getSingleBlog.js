const { gerErrorObj } = require('../errorResponses');

module.exports = {
  get: {
    summary: 'Get Single Blog',
    description: 'This API will be used for getting single blog',
    produces: ['application/json'],
    tags: ['Blog'],
    security: [],
    parameters: [
      {
        name: 'id',
        in: 'path',
        description: "The 'id' of blog you want to update",
        default: '6',
      },
    ],
    responses: {
      200: {
        description: 'successful operation',
        schema: {
          $ref: '#/definitions/addBlogResponse',
        },
      },
      ...gerErrorObj(false),
    },
  },
};
