const functions = require('../../utils/functions');

const blogModel = {
  title: {
    type: 'string',
    default: 'What is Lorem Ipsum?',
    in: 'formData',
    required: true,
  },
  content: {
    type: 'string',
    in: 'formData',
    default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua',
    required: true,
  },
  image: {
    in: 'formData',
    type: 'string',
    default:
      'https://www.pickshop.pk/wp-content/uploads/2018/02/Custom-Name-T-Shirt-By-Teez-Mar-Khan-Pickshop.Pk_-700x848.jpg',
    required: true,
  },
};

const blogExtras = {
  id: {
    type: 'integer',
  },
  user_id: {
    type: 'integer',
  },
  date: {
    type: 'string',
  },
  time: {
    type: 'string',
  },
  user: {
    type: 'object',
    properties: {
      id: {
        type: 'integer',
      },
      name: {
        type: 'string',
      },
    },
  },
};

const getBlogModel = (forAdd = true) => {
  if (forAdd) {
    return { ...blogModel };
  }
  const removedDefaults = functions.removeDefaults(JSON.stringify(blogModel));
  return { ...blogExtras, ...removedDefaults };
};
module.exports = { getBlogModel };
