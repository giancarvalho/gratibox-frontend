import Joi from 'joi';

const zipcodeSchema = Joi.string().pattern(/^\d+$/);

export default zipcodeSchema;
