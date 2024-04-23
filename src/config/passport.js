const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt');
const config = require('./config');
const constants = require('./constants');

const { TOKEN_TYPES } = constants;

const {
  getUserModel,
} = require('./usersUtils');

const jwtOptions = {
  secretOrKey: config.jwt.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

const jwtVerifym = async (payload, done) => {
  try {
    if (payload.type !== TOKEN_TYPES.ACCESS) {
      throw new Error('Invalid token type');
    }
    const { sub, url } = payload;
    const userModel = getUserModel(url);
    const user = await userModel.findByPk(sub);
    if (!user) {
      return done(null, false);
    }
    delete user.dataValues.password;
    done(null, user);
  } catch (error) {
    done(error, false);
  }
};

const jwtStrategy = new JwtStrategy(jwtOptions, jwtVerifym);

module.exports = {
  jwtStrategy,
};
