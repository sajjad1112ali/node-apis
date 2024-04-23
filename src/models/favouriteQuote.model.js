const blogComments = (sequelize, type, User, Quote) => sequelize.define(
  'favourite_quotes',
  {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: type.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
    },
    quote_id: {
      type: type.INTEGER,
      references: {
        model: Quote,
        key: 'id',
      },
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = blogComments;
