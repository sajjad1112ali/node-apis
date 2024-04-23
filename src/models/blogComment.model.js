const blogComments = (sequelize, type, User, Blog) => sequelize.define(
  'blog_comments',
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
    blog_id: {
      type: type.INTEGER,
      references: {
        model: Blog,
        key: 'id',
      },
    },
    comment: {
      type: type.STRING,
      trim: true,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = blogComments;
