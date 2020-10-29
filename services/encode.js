const jwt = require("jsonwebtoken");
const moment = require("moment");

const generateJWTToken = async (request, response) => {
  const secretKey = process.env.ENCODE_KEY;

  return new Promise((resolve, reject) => {
    jwt.sign(
      request.body,
      secretKey,
      { expiresIn: 60 * 60 },
      (error, token) => {
        if (error) {
          return response.status(400).send({
            statusCode: 400,
            message: "fail",
            error,
          });
        }

        let tokenResponse = { token };
        const currentTime = moment.utc().format();
        tokenResponse.expiryDate = moment(currentTime)
          .add(1, "hour")
          .utc()
          .format();

        return response.status(200).send({
          statusCode: 200,
          message: "success",
          tokenResponse,
        });
      }
    );
  });
};

module.exports = { generateJWTToken };
