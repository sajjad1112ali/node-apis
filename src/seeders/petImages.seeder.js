const { petImages } = require('./data');

module.exports = {
  up: async (Model) => {
    const recordExist = await Model.findAndCountAll({ attributes: ['image'] });
    if (!(recordExist.count)) {
      return Model.bulkCreate(petImages);
    }
    petImages.forEach(async (val) => {
      const resObject = recordExist.rows.find((item) => item.image === val.image);
      if (!resObject) {
        await Model.create(val);
      }
    });
  },
};
