const { blogUsers } = require('./data');

module.exports = {
  up: async (Model) => {
    const recordExist = await Model.findAndCountAll({ attributes: ['email'] });
    if (!(recordExist.count)) {
      return Model.bulkCreate(blogUsers);
    }
    blogUsers.forEach(async (val) => {
      const resObject = recordExist.rows.find((item) => item.email === val.email);
      if (!resObject) {
        await Model.create(val);
      }
    });
  },
};
