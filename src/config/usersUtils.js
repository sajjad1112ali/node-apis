const constants = require('./constants');

const { USER_ROUTE_URL } = constants;

const {
  User,
  BlogUser,
  petBazzarUser,
} = require('../models');

const getUserModel = (url) => {
  let userModel = User;
  if (url.includes(USER_ROUTE_URL.BLOGBUSTER)) userModel = BlogUser;
  if (url.includes(USER_ROUTE_URL.PETBAZZAR)) userModel = petBazzarUser;
  return userModel;
};

module.exports = {
  getUserModel,
};
