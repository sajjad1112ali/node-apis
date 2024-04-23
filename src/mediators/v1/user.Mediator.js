const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');
const { TOKEN_TYPES, EMAIL } = require('../../config/constants');

const { EMAIL_TEMPLATES } = EMAIL;

const { userService, tokenService, emailService } = require('../../services/v1');

const loginUser = async (email, password, url) => {
  const user = await userService.getUserByEmail(email, url);
  if (!user || !(await userService.isPasswordMatch(user, password))) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Incorrect email or password');
  }
  return user;
};

const forgotPassword = async (user_email, url) => {
  const user = await userService.getUserByEmail(user_email, url);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist');
  }

  const link = await tokenService.generateTokenByType(user, TOKEN_TYPES.RESET_PASSWORD, url);
  const { email, name } = user;
  await emailService.sendEmail({
    email, name, link, url,
  }, EMAIL_TEMPLATES.RESET_PASSWORD_KEY);

  return {
    message: 'Reset password link has been sent at your registered email',
  };
};

module.exports = {
  loginUser,
  forgotPassword,
};
