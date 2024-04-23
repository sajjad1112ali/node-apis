module.exports = {
  tokens: {
    type: 'object',
    properties: {
      access: {
        type: 'object',
        properties: {
          token: {
            type: 'string',
          },
          expires: {
            type: 'string',
          },
        },
      },
      refresh: {
        type: 'object',
        properties: {
          token: {
            type: 'string',
          },
          expires: {
            type: 'string',
          },
        },
      },
    },
  },
};
