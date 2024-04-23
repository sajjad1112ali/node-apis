const { blogs } = require('./data');

module.exports = {
  up: async (Model) => {
    try {
      const recordExist = await Model.findAndCountAll({ attributes: ['title'] });
      if (!(recordExist.count)) {
        return Model.bulkCreate(blogs);
      }
      blogs.forEach(async (val) => {
        const resObject = recordExist.rows.find((item) => item.title === val.title);
        if (!resObject) {
          await Model.create(val);
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
};
