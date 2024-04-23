const httpStatus = require('http-status');
const Joi = require('joi');

const catchAsync = require('../../utils/catchAsync');
const constants = require('../../config/constants');
const { password: passwordValidations } = require('../../validations/custom.validation');

const { userMediator } = require('../../mediators/v1');

const { EMAIL_TEMPLATES } = constants.EMAIL;

const { userService, emailService, tokenService } = require('../../services/v1');

const currentEnvironment = process.env.NODE_ENV;

const register = catchAsync(async (req, res) => {
  const currentUrl = req.originalUrl;
  const { body } = req;
  const user = await userService.createUser(body, currentUrl);
  if (currentEnvironment !== 'development' || 1) {
    body.url = currentUrl;
    await emailService.sendEmail(body, EMAIL_TEMPLATES.WELCOME_KEY);
  }
  const tokens = await tokenService.generateAuthTokens(user);
  res.status(httpStatus.OK).send({ user, tokens, currentUrl });
});

const login = catchAsync(async (req, res) => {
  const currentUrl = req.originalUrl;
  const { email, password } = req.body;
  const user = await userMediator.loginUser(email, password, currentUrl);
  delete user.password;
  const tokens = await tokenService.generateAuthTokens(user, currentUrl);
  res.header('x-auth-token', tokens.access.token).send({ user, tokens });
});

const getProfile = catchAsync(async (req, res) => {
  const { user } = req;
  res.status(httpStatus.OK).send(user);
});

const forgotPassword = catchAsync(async (req, res) => {
  const currentUrl = req.originalUrl;
  const { email } = req.body;
  const result = await userMediator.forgotPassword(email, currentUrl);
  res.status(httpStatus.OK).send(result);
});

const resetPassword = catchAsync(async (req, res) => {
  const currentUrl = req.originalUrl;
  const { body } = req;
  const schema = Joi.object().keys({
    password: Joi.string().required().custom(passwordValidations),
    repeatPassword: Joi.any().valid(Joi.ref('password')).required()
      .messages({
        'any.only': 'Password did not matched.',
      }),
    token: Joi.string().required(),
  });
  const result = schema.validate(body);
  if (result.error) {
    res.status(httpStatus.OK).send({ error: true, message: result.error.details[0].message });
    return;
  }

  const { token, password } = body;
  const tokent_status = await tokenService.verifyToken(token, currentUrl);
  if (tokent_status && tokent_status.error) {
    res.status(httpStatus.OK).send({ error: true, message: 'The link is no longer valid.' });
    return;
  }
  const { user_id } = tokent_status;
  await userService.updateUserPassword(user_id, password, currentUrl);

  res.status(httpStatus.OK).send({ error: false, message: 'Password updated successfully' });
});

module.exports = {
  register,
  getProfile,
  login,
  forgotPassword,
  resetPassword,
};
