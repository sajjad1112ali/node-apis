const { getBlogModel } = require('./blogModel');

module.exports = {
  blogItems: {
    type: 'object',
    properties: {
      ...getBlogModel(false),
    },
  },
};
