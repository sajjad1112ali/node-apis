const tokens = require('./login/tokens');
const login = require('./login/login');
const forgoPassword = require('./login/forgoPassword');
const register = require('./login/register');
const authResponse = require('./login/authResponse');
const user = require('./login/user');
const addBlog = require('./blog/addBlog');
const getBlogs = require('./blog/getBlogs');
const blogItems = require('./blog/blogItems');
const errorResponses = require('./responses');
const addBlogResponse = require('./blog/addBlogResponse');
const deleteBlog = require('./blog/deleteBlog');

module.exports = {
  ...tokens,
  ...register,
  ...login,
  ...forgoPassword,
  ...addBlog,
  ...getBlogs,
  ...blogItems,
  ...authResponse,
  ...user,
  ...errorResponses,
  ...addBlogResponse,
  ...deleteBlog,
};
