const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const { TOKEN_TYPES, EMAIL } = require('../../config/constants');

const { EMAIL_TEMPLATES } = EMAIL;
const { userService, tokenService, emailService } = require('../../services/v1');

const loginUser = async (email, password) => {
  const user = await userService.getUserByEmail(email);
  if (!user || !(await userService.isPasswordMatch(user, password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  return user;
};

module.exports = {
  loginUser,
  forgotPassword,
};
