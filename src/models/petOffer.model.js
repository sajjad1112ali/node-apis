const Breeds = (sequelize, type, User, Pet) => sequelize.define(
  'pet_offers',
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
    pet_id: {
      type: type.INTEGER,
      references: {
        model: Pet,
        key: 'id',
      },
    },
    amount: {
      type: type.INTEGER,
      allowNull: false,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = Breeds;
