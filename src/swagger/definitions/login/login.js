module.exports = {
  login: {
    type: 'object',
    properties: {
      email: {
        type: 'string',
        default: 'sajjadramzan1211@gmail.com',
        required: true,
      },
      password: {
        type: 'string',
        default: 'Hello123',
        required: true,
      },
    },
  },
};
