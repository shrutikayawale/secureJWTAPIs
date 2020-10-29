const jwt = require("jsonwebtoken");

const verifyJWTToken = async (authorization) => {
  const secretKey = process.env.ENCODE_KEY;
  return new Promise((resolve, reject) => {
    jwt.verify(authorization, secretKey, (error, decoded) => {
      if (error) reject(error);
      console.log(decoded);
      resolve(decoded);
    });
  });
};

module.exports = { verifyJWTToken };
