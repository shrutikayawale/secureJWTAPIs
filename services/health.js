const health = (request, response) => {
  return response.status(200).send({
    statusCode: 200,
    message: "success",
    date: new Date(),
  });
};

module.exports = { health };
