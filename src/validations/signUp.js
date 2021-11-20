import Joi from 'joi';

const newUserSchema = Joi.object({
  name: Joi.string().min(3).max(30).required().messages({
    'string.min': 'O nome deve no mínimo 3 caracteres',
    'string.max': 'O nome deve ter no máximo 30 caracteres',
  }),
  email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  password: Joi.string().min(6).max(60).required().messages({
    'string.min': 'A senha deve ter no mínimo 6 caracteres',
    'string.max': 'A senha não deve exceder 60 caracteres',
  }),
});

function areInputsValid({ sendAlert, newUserData, confirmPassword }) {
  const newUserValidation = newUserSchema.validate(newUserData);

  if (newUserValidation.error) {
    sendAlert({
      message: newUserValidation.error.message,
      error: true,
    });
    return true;
  }

  if (newUserData.password !== confirmPassword) {
    sendAlert({ message: "Your passwords don't match", error: true });
    return true;
  }

  return false;
}

export default areInputsValid;
