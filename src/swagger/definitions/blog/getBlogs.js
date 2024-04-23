module.exports = {
  getBlogs: {
    type: 'array',
    items: {
      $ref: '#/definitions/blogItems',
    },
  },
};
