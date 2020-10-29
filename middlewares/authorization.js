require("dotenv").config();
const { verifyJWTToken } = require("../utils/utils");

/**
 *
 * @param {checkAuthorization} checks for authentication
 * @param {*} res
 * @param {*} next
 */
const checkAuthorization = async (req, res, next) => {
  let authorization = req.headers["authorization"]; // Express headers are auto converted to lowercase
  if (process.env.TEST_ENV) {
    next();
  } else {
    if (authorization) {
      try {
        const decodedToken = await verifyJWTToken(authorization);

        if (decodedToken.id === "8149925640") {
          next();
        } else {
          return res.status(401).send({
            message:
              "You are not authorized to continue. Please enter valid id.",
          });
        }
      } catch (error) {
        console.log("error in token check", error);
        return res.status(401).send({ message: "Oops, something went wrong!" });
      }
    } else {
      return res.status(401).send({ message: "Authorization is missing" });
    }
  }
};

module.exports = { checkAuthorization };
