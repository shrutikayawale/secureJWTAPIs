const { verifyJWTToken } = require("../utils/utils");

const decodeJWTToken = async (request, response) => {
  let authorization = request.headers["authorization"];

  try {
    const decoded = await verifyJWTToken(authorization);
    return response.status(200).send({
      statusCode: 200,
      message: "success",
      data: decoded,
    });
  } catch (error) {
    console.error("Error in decode - ", error);
    return response.status(400).send({
      statusCode: 400,
      message: "fail",
      error,
    });
  }
};

module.exports = { decodeJWTToken };
