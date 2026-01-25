"use strict";

const role = require("../constraints/role");
const admin = Object.values(role)[0];

module.exports = (req, res, next) => {
  console.log("req.user in authorized middleware: ", req.user);
  if (!req.user) {
    return res.status(401).send({
      error: true,
      message: "Authentication required",
    });
  }

  const userRole = req.user?.role;


   if (userRole === admin) {
    return next();
  }
  return res
    .status(403)
    .send({ error: "Access denied. Admins only.", userRole, user: req.user });
};
