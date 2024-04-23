const STATUS_CODE = {
  SUCCESS: 200,
  FAILED:  400,
};

const MESSAGE = {
  SUCCESS: 'OK',
  FAILED:  'Bad Request',
};

/**
 * Success response send to client
 * @returns {object}
 */
const success = (data = {}, options = {}) => {
  return {
    code: options.hasOwnProperty('status_code') ? options.status_code : STATUS_CODE.SUCCESS,
    message: options.hasOwnProperty('message') ? options.message : MESSAGE.SUCCESS,
    data: data,
  };
};

const modSuccess = (data = {}, options = {}) => {
  return {
    code: options.hasOwnProperty('status_code') ? options.status_code : STATUS_CODE.SUCCESS,
    message: options.hasOwnProperty('message') ? options.message : MESSAGE.SUCCESS,
    ...data,
  };
};

/**
 * Failed response send to client
 * @returns {object}
 */
const failed = (data = {}, options = {}) => {
  return {
    code: options.hasOwnProperty('status_code') ? options.status_code : STATUS_CODE.FAILED,
    message: options.hasOwnProperty('message') ? options.message : MESSAGE.FAILED,
    data: data,
  };
};

module.exports = {
  success,
  failed,
  modSuccess,
};
