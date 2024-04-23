const bcrypt = require('bcryptjs');

const httpStatus = require('http-status');
const ApiError = require('../../utils/ApiError');

const {
  getUserModel,
} = require('../../config/usersUtils');

const encrypPassword = (password) => bcrypt.hashSync(password, 10);

const createUser = async (data, url) => {
  const userModel = getUserModel(url);
  const {
    email, name, password, phone_number,
  } = data;
  const [user, created] = await userModel.findOrCreate({
    where: { email },
    defaults: {
      name,
      password: encrypPassword(password),
      phone_number,
    },
    raw: true,
  });

  if (!created) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Email already taken');
  }
  delete user.dataValues.password;
  return user;
};

const getUserByEmail = async (email, url) => {
  const userModel = getUserModel(url);
  const user = await userModel.findOne({ where: { email }, raw: true });
  return user;
};

async function isPasswordMatch(user, password) {
  return bcrypt.compare(password, user.password);
}

async function updateUserPassword(user_id, password, url) {
  const userModel = getUserModel(url);
  const user = await userModel.findOne({ where: { id: user_id } });
  user.password = encrypPassword(password);
  await user.save();
}

module.exports = {
  createUser,
  isPasswordMatch,
  getUserByEmail,
  updateUserPassword,
};
