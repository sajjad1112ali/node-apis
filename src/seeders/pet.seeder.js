const { petsData } = require('./data');

module.exports = {
  up: async (Model, speciesName) => {
    try {
      const pets = petsData[speciesName];
      const recordExist = await Model.findAndCountAll({ attributes: ['name'] });
      if (!(recordExist.count)) {
        return Model.bulkCreate(pets);
      }
      pets.forEach(async (val) => {
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
