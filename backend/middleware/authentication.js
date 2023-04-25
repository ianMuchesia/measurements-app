const User = require("../models/User");
const jwt = require("jsonwebtoken");
const { UnauthenticatedError } = require("../errors");
const { isTokenValid } = require("../utils");

const authenticateUser = async (req, res, next) => {
  const token = req.signedCookies.token; //the token characters

  if (!token) {
    throw new UnauthenticatedError("Authentication Invalid");
  }

  const { name, userId, role } = isTokenValid({ token });
  req.user = { name, userId, role };
  next();
};

module.exports = authenticateUser;
