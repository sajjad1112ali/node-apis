const PetImage = (sequelize, type, Pet) => sequelize.define(
  'pet_images',
  {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    pet_id: {
      type: type.INTEGER,
      references: {
        model: Pet,
        key: 'id',
      },
    },
    image: {
      type: type.STRING,
    },
    is_main: {
      type: type.BOOLEAN,
      defaultValue: false,
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

module.exports = PetImage;
