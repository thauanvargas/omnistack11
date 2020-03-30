const crypto = require("crypto");

module.exports = function generateUniqueId(id) {
  return crypto.randomBytes(4).toString("HEX");
};
