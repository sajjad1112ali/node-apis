const { TOKEN_TYPES, APPS } = require('../config/constants');

const Token = (sequelize, type) => sequelize.define(
  'tokens',
  {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    token: {
      type: type.STRING,
      allowNull: false,
    },
    user_id: {
      type: type.INTEGER,
    },
    type: {
      type: type.ENUM(TOKEN_TYPES.REFRESH, TOKEN_TYPES.RESET_PASSWORD, TOKEN_TYPES.VERIFY_EMAIL),
    },
    expires: {
      type: type.DATE,
    },
    app_name: {
      type: type.ENUM(APPS.BLOGBUSTER, APPS.QUOTES),
    },
    blacklisted: {
      type: type.BOOLEAN,
      defaultValue: false,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = Token;
