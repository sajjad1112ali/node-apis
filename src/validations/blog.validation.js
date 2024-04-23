const Joi = require('joi');

const add = {
  body: Joi.object().keys({
    title: Joi.string().required(),
    content: Joi.string().required(),
  }),
};

const singleBlog = {
  params: Joi.object().keys({
    id: Joi.number().required(),
  }),
};

const addComment = {
  body: Joi.object().keys({
    blog_id: Joi.number().required(),
    comment: Joi.string().required(),
  }),
};

module.exports = {
  add,
  singleBlog,
  addComment,
};
