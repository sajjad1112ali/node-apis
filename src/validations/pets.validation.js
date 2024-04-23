const Joi = require('joi');
const { PETS } = require('../config/constants');

const petsArray = Object.keys(PETS);
const petTypes = {
  params: Joi.object().keys({
    type: Joi.string().valid(...petsArray).required(),

  }),
};

const petID = {
  params: Joi.object().keys({
    id: Joi.number().required(),

  }),
};
const petOffer = {
  body: Joi.object().keys({
    amount: Joi.number().required(),

  }),
};

module.exports = {
  petTypes,
  petID,
  petOffer,
};
