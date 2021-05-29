const Validator = require('validator');
const isEmpty = require('./is_Empty');

module.exports = function validateEducationInput(data) {
  let errors = {};

  data.school = !isEmpty(data.school) ? data.school : '';
  data.degree = !isEmpty(data.degree) ? data.degree : '';
  data.from = !isEmpty(data.from) ? data.from : '';
  data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';

  if (Validator.isEmpty(data.school)) {
    errors.school = 'Job school is required';
  };

  if (Validator.isEmpty(data.degree)) {
    errors.degree = 'Company name field is required';
  };

  if (Validator.isEmpty(data.from)) {
    errors.from = 'From date field is required';
  };

  if (Validator.isEmpty(data.fieldofstudy)) {
    errors.fieldofstudy = 'From date field is required';
  };

  return  {
    errors,
    isValid: isEmpty(errors)
  }
}
