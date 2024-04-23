const { gerErrorObj } = require('../errorResponses');

module.exports = {
  '/blogs/add': {
    post: {
      summary: 'Add Blog',
      description: 'End point for adding a new blog',
      produces: ['application/json'],
      tags: ['Blog'],
      parameters: [
        {
          name: 'title',
          type: 'string',
          default: 'What is Lorem Ipsum?',
          in: 'formData',
          required: true,
        },
        {
          name: 'content',
          type: 'string',
          in: 'formData',
          default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
          required: true,
        },
        {
          name: 'image',
          in: 'formData',
          type: 'file',
          required: true,
        },
      ],
      responses: {
        200: {
          description: 'successful operation',
          schema: {
            $ref: '#/definitions/addBlogResponse',
          },
        },
        ...gerErrorObj(true),
      },
    },
  },
};
