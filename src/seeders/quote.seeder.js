const { quotes } = require('./data');

module.exports = {
  up: async (Model) => {
    try {
      const recordExist = await Model.findAndCountAll({ attributes: ['quote'] });
      if (!(recordExist.count)) {
        return Model.bulkCreate(quotes);
      }
      quotes.forEach(async (val) => {
        const resObject = recordExist.rows.find((item) => item.quote === val.quote);
        if (!resObject) {
          await Model.create(val);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};
