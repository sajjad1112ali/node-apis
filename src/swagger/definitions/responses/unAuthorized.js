module.exports = {
  unAuthorized: {
    type: 'object',
    properties: {
      status: {
        type: 'integer',
        default: 401,
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
