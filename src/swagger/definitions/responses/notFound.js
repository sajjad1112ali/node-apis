module.exports = {
  notFound: {
    type: 'object',
    properties: {
      status: {
        type: 'integer',
        default: 404,
      },
      message: {
        type: 'string',
      },
      stack: {
        type: 'string',
      },
    },
  },
};
