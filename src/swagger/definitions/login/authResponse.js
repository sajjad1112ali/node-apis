module.exports = {
  authResponse: {
    type: 'object',
    properties: {
      user: {
        type: 'object',
        $ref: '#/definitions/user',
      },
      tokens: {
        type: 'object',
        $ref: '#/definitions/tokens',
      },
    },
  },
};
