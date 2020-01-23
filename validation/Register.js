const Validator = require("validator");
const isEmpty = require("is-empty");

module.exports = function validateRegisterInput(data) {
    let errors = {};

    if (!Validator.equals(data.password1, data.password2)) {
        errors.password =  "Passwords must match";
    }
    return {
        errors,
        isValid: isEmpty(errors)
    };
};