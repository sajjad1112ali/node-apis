/* eslint-disable max-len */
/* eslint-disable camelcase */
const jwt = require('jsonwebtoken');
const moment = require('moment');
const config = require('../../config/config');
const constants = require('../../config/constants');
const {
  Token,
} = require('../../models');

const { TOKEN_TYPES, USER_ROUTE_URL, APPS } = constants;

const generateToken = (user_id, expires, type, url, secret = config.jwt.secret) => {
  const payload = {
    sub: user_id,
    iat: moment().unix(),
    exp: expires.unix(),
    type,
    url,
  };
  return jwt.sign(payload, secret);
};

const generateAuthTokens = async (data, url) => {
  const accessTokenExpires = moment().add(config.jwt.accessExpirationMinutes, 'minutes');
  const accessToken = generateToken(data.id, accessTokenExpires, TOKEN_TYPES.ACCESS, url);

  const refreshTokenExpires = moment().add(config.jwt.refreshExpirationDays, 'days');
  const refreshToken = generateToken(data.id, refreshTokenExpires, TOKEN_TYPES.REFRESH, url);

  return {
    access: {
      token: accessToken,
      expires: accessTokenExpires.toDate(),
    },
    refresh: {
      token: refreshToken,
      expires: refreshTokenExpires.toDate(),
    },
  };
};
const create = async (data) => Token.create(data);
const update = async (user_id, type, appName) => Token.update({ blacklisted: 1 }, { where: { user_id, type, app_name: appName } });

const generateTokenByType = async (data, type, url) => {
  let pageURL = USER_ROUTE_URL.QUOTES;
  let appName = APPS.QUOTES;
  if (url.includes(USER_ROUTE_URL.BLOGBUSTER)) {
    appName = APPS.BLOGBUSTER;
    pageURL = USER_ROUTE_URL.BLOGBUSTER;
  }

  const { id: user_id } = data;
  const tokenExpires = moment().add(config.jwt[type], 'minutes');
  const accessToken = generateToken(user_id, tokenExpires, type);
  const tokenData = {
    user_id,
    type,
    token: accessToken,
    expires: tokenExpires.toDate(),
    app_name: appName,
  };
  await update(user_id, type, appName);
  const createdToken = await create(tokenData);
  const link = `${config.APP.BASE_URL}/pages/${pageURL}/reset-password?token=${createdToken.token}`;
  return link;
};

const verifyToken = async (token, url) => {
  try {
    let appName = APPS.QUOTES;
    if (url.includes(USER_ROUTE_URL.BLOGBUSTER)) {
      appName = APPS.BLOGBUSTER;
    }
    jwt.verify(token, config.jwt.secret);
    const tokenDoc = await Token.findOne({
      where: {
        token,
        blacklisted: false,
        app_name: appName,
      },
    });
    if (!tokenDoc) {
      return { error: true };
    }
    tokenDoc.blacklisted = true;
    await tokenDoc.save();
    return tokenDoc;
  } catch (error) {
    return { error: true };
  }
};

module.exports = {
  generateAuthTokens,
  generateTokenByType,
  verifyToken,
};
