const { gerErrorObj } = require('../errorResponses');

module.exports = {
  delete: {
    summary: 'Delete Blog',
    description: 'This API will be used for delete a blog',
    produces: ['application/json'],
    tags: ['Blog'],
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
          $ref: '#/definitions/deleteBlog',
        },
      },
      ...gerErrorObj(true),
    },
  },
};
