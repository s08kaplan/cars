"use strict";

const jwt = require("../configs/requiredBasics").jwt;

module.exports = async (req, res, next) => {
  const auth = await req.headers?.authorization;
/* console.log(auth)
  if (!auth) {
    res.status(401).send({
      error: true,
      message: "No token provided",
    });
  } */
  const tokenKey = auth.split(" ")

  if (tokenKey[0] !== "Bearer") {
    return res.status(401).send({
      error: true,
      message: "Invalid token format",
    });
  }

  jwt.verify(tokenKey[1], process.env.ACCESS_KEY,(error, accessData) => {
    req.user = accessData 
    next();
  });
};
