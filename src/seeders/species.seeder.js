const { species } = require('./data');

module.exports = {
  up: async (Model) => {
    try {
      const recordExist = await Model.findAndCountAll({ attributes: ['name'] });
      if (!(recordExist.count)) {
        return Model.bulkCreate(species);
      }
      species.forEach(async (val) => {
        const resObject = recordExist.rows.find((item) => item.name === val.name);
        if (!resObject) {
          await Model.create(val);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};
