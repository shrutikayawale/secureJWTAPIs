"use strict";

require("dotenv").config();
const app = require("./app");
const port = process.env.PORT;

app.listen(port, () => {
  console.info(`Server started at PORT : ${port}`);
});
