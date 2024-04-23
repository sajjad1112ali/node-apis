const { getBlogModel } = require('./blogModel');

module.exports = {
  addBlogResponse: {
    type: 'object',
    properties: {
      ...getBlogModel(false),
    },
  },
};
