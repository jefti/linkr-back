import Joi from 'joi';

export const postSchema = Joi.object({
  description: Joi.string().required(),
  link: Joi.string().uri().required(),
});
