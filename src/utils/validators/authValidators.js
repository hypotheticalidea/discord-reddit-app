// src/utils/validators/authValidators.js
export const validateEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};

export const validatePassword = (password) => {
  return password && password.length >= 6;
};

export const validateConfirmPassword = (password, confirmPassword) => {
  return password === confirmPassword;
};

// Real name validation for onboarding
export const validateRealName = (name) => {
  return name.trim().length >= 2 && /^[a-zA-Z\s]+$/.test(name.trim());
};
