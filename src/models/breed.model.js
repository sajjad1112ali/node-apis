const Breeds = (sequelize, type, Species) => sequelize.define(
  'breeds',
  {
    id: {
      type: type.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    species_id: {
      type: type.INTEGER,
      references: {
        model: Species,
        key: 'id',
      },
    },
    name: {
      type: type.STRING,
      allowNull: false,
    },
  },
  {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
);

module.exports = Breeds;
