const User = (sequelize, type) => sequelize.define(
  'pet_bazzar_user',
  {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: type.STRING,
      trim: true,
    },
    email: {
      type: type.STRING,
      trim: true,
      unique: 'email',
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: type.STRING,
      trim: true,
      allowNull: false,
      minimum: 8,
    },
    phone_number: {
      type: type.STRING,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = User;
