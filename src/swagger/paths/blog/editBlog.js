const deleteBlog = require('./deleteBlog');
const getSingleBlog = require('./getSingleBlog');
const { gerErrorObj } = require('../errorResponses');

module.exports = {
  '/blogs/{id}': {
    ...getSingleBlog,
    put: {
      summary: 'Edit Blog',
      description: 'This API will be used for editing a blog',
      produces: ['application/json'],
      tags: ['Blog'],
      parameters: [
        {
          name: 'id',
          in: 'path',
          description: "The 'id' of blog you want to update",
          default: '6',
        },
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
          required: false,
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
    ...deleteBlog,
  },
};
