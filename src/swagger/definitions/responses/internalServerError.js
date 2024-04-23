module.exports = {
  internalServerError: {
    type: 'object',
    properties: {
      status: {
        type: 'integer',
        default: 500,
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
