"use strict";

const express = require("express");
const router = express.Router();

const { health } = require("../services/health");
const { generateJWTToken } = require("../services/encode");
const { decodeJWTToken } = require("../services/decode");
const { checkAuthorization } = require("../middlewares/authorization");
//open APIs
router.get("/v1/health", health);
router.get("/v1/decode", decodeJWTToken);
router.post("/v1/encode", generateJWTToken);

router.use(checkAuthorization); //added middlewrae for security
//secure APIs
router.get("/v1/secure-health", health);

module.exports = router;
