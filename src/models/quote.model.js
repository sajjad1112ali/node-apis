const Qutes = (sequelize, type, User) => sequelize.define(
  'quotes',
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
    quote: {
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
    hooks: {
      afterFind: (resultSet) => {
        // if (!resultSet) return resultSet;
        // if (resultSet.constructor !== Array) { resultSet.image = `${APP.BASE_URL}/uploads/${resultSet.image}`; } else {
        //   // eslint-disable-next-line array-callback-return
        //   resultSet.map((item) => {
        //     item.image = `${APP.BASE_URL}/uploads/${item.image}`;
        //   });
        // }
      },
    },
  },
);

module.exports = Qutes;
