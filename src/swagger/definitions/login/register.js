module.exports = {
  register: {
    type: 'object',
    properties: {
      name: {
        type: 'string',
        default: 'Sajjad Ali',
        required: true,
      },
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
      phone_number: {
        type: 'string',
        default: '+124578963',
        required: true,
      },
    },
  },
};
