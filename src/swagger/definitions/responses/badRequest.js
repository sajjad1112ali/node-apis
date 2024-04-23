module.exports = {
  badRequest: {
    type: 'object',
    properties: {
      status: {
        type: 'integer',
        default: 400,
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
