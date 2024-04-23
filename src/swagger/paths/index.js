const register = require('./login/register');
const auth = require('./login/auth');
const forgotPassword = require('./login/forgotPassword');
const addBlog = require('./blog/addBlog');
const getBlogs = require('./blog/getBlogs');
const editBlog = require('./blog/editBlog');

module.exports = {
  ...register,
  ...auth,
  ...forgotPassword,
  ...addBlog,
  ...getBlogs,
  ...editBlog,
};
