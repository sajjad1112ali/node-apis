const { getBlogModel } = require('./blogModel');

module.exports = {
  addBlog: {
    type: 'object',
    properties: {
      ...getBlogModel(true),
    },
  },
};
