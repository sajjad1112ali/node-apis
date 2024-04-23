const sequelize = require('sequelize');

const getDateTimeAttr = (table) => {
  const tableName = table ? `${table}.` : '';
  const dateFormatD = [sequelize.fn('DATE_FORMAT', sequelize.col(`${tableName}created_at`), '%b %d, %Y'), 'date'];
  const timeFormatD = [sequelize.fn('DATE_FORMAT', sequelize.col(`${tableName}created_at`), '%h:%i %p'), 'time'];
  const includeDateAndTimeD = [
    dateFormatD,
    timeFormatD,
  ];
  return includeDateAndTimeD;
};

const excludeDates = ['created_at', 'updated_at', 'is_active'];

module.exports = {
  excludeDates,
  getDateTimeAttr,
};
