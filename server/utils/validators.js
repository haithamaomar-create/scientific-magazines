const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

const validateRequired = (fields, body) => {
  const missing = fields.filter((field) => !body[field]);
  return missing.length === 0
    ? { valid: true }
    : { valid: false, missing };
};

module.exports = { validateEmail, validateRequired };
