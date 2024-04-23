const badRequest = require('./badRequest');
const internalServerError = require('./internalServerError');
const notFound = require('./notFound');
const unAuthorized = require('./unAuthorized');

module.exports = {
  ...badRequest, ...internalServerError, ...notFound, ...unAuthorized,
};
