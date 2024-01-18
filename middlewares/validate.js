const jwt = require("jsonwebtoken");
const secret = "kkshiroya";
const createToken = (data) => {
  const token = jwt.sign({ data }, secret);
  return token;
};


const veirfyToken = (token) => {
  return jwt.verify(token, secret);
};

module.exports = { createToken, veirfyToken };