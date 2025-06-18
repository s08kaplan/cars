"use strict"

const role = require("../constraints/role")
const admin = Object.values(role)[0]

 
module.exports = (req, res, next) => {
  const userRole = req.user?.role;

  if (userRole === admin) {
    return next();
  }

  return res.status(403).send({ error: "Access denied. Admins only." });
};
