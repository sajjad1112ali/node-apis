const Pet = (sequelize, type, User, Species, Breed) => sequelize.define(
  'pets',
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
    species_id: {
      type: type.INTEGER,
      references: {
        model: Species,
        key: 'id',
      },
    },
    breed_id: {
      type: type.INTEGER,
      references: {
        model: Breed,
        key: 'id',
      },
    },
    name: {
      type: type.STRING,
      trim: true,
    },
    age: {
      type: type.STRING,
      trim: true,
    },
    gender: {
      type: type.STRING,
      trim: true,
    },
    color: {
      type: type.STRING,
      trim: true,
    },
    description: {
      type: type.TEXT,
      trim: true,
    },
    is_active: {
      type: type.BOOLEAN,
      defaultValue: true,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = Pet;
