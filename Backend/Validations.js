const Joi = require("@hapi/joi");

const registerValidation = (data) => {
  const Schema = Joi.object({
    name: Joi.string().required().min(3).max(255),
    email: Joi.string().required().min(3).max(255).email(),
    password: Joi.string().required().min(3).max(1025),
  });
  return Schema.validate(data);
};

const loginValidation = (data) => {
  const Schema = Joi.object({
    email: Joi.string().required().min(3).max(255).email(),
    password: Joi.string().required().min(3).max(1025),
  });
  return Schema.validate(data);
};
module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
