const Joi = require("joi");

const schema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  password: Joi.string().min(8).required(),
});

const clearSchema = Joi.object({
  username: Joi.string().min(3).max(20).required(),
  clearPassword: Joi.string().min(8).required(),
});

module.exports = { schema, clearSchema };
