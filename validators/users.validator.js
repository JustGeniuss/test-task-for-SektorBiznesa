const Joi = require("joi");

module.exports.BodyForRegistration = (body) => {
  const getSchema = Joi.object().keys({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = getSchema.validate(body, { abortEarly: false });

  if (!error) return { validated: true };

  return {
    validated: false,
    error,
  };
};

module.exports.BodyForLogin = (body) => {
  const getSchema = Joi.object().keys({
    email: Joi.string().email().required(),
    password: Joi.string().required(),
  });

  const { error } = getSchema.validate(body, { abortEarly: false });

  if (!error) return { validated: true };

  return {
    validated: false,
    error,
  };
};

module.exports.BodyForChange = (body) => {
  const getSchema = Joi.object()
    .keys({
      name: Joi.string().alphanum(),
      surname: Joi.string(),
      email: Joi.string().email(),
      sex: Joi.valid("male", "female"),
      photo: Joi.string(),
    })
    .min(1);

  const { error } = getSchema.validate(body, { abortEarly: false });

  if (!error) return { validated: true };

  return {
    validated: false,
    error,
  };
};

module.exports.Id = (params) => {
  const getSchema = Joi.number().integer().min(1).required();

  const { error } = getSchema.validate(params, { abortEarly: false });

  if (!error) return { validated: true };

  return {
    validated: false,
    error,
  };
};

module.exports.Pagination = (params) => {
  const getSchema = Joi.object().keys({
    offset: Joi.number().integer().required().min(0),
    usersForPage: Joi.number().integer().required().min(1),
  });

  const { error } = getSchema.validate(params, { abortEarly: false });

  if (!error) return { validated: true };

  return {
    validated: false,
    error,
  };
};
