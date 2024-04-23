const Joi = require('joi');

const add = {
  body: Joi.object().keys({
    quote: Joi.string().max(500).required(),
  }),
};

const quoteWithID = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

module.exports = {
  add,
  quoteWithID,
};
