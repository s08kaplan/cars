"use strict";

const role = require("../constraints/role");
const admin = Object.keys(role)[0];
const  jwt  = require("../configs/requiredBasics").jwt;

module.exports = (req, res, next) => {
  /* console.log(admin) */
  const token = req.cookies?.accessToken;
if (!token) {
    return res.status(401).json({
      error: true,
      message: 'Access denied. No token provided.'
    });
  }
  const decoded = jwt.verify(token, process.env.ACCESS_KEY);

  req.user = { id: decoded.id, role: decoded.role };
/*   console.log("req.user in authorized middleware: ", req.user); */
  if (!req.user) {
    return res.status(401).send({
      error: true,
      message: "Authentication required",
    });
  }

  const userRole = req.user?.role;
/*   console.log("role: ", userRole);
   console.log("role: ", admin);
  console.log("role ?= admin ", userRole === admin); */
  if (userRole === admin) {
   /*  console.log("welcome admin"); */
    return next();
  }
  return res
    .status(403)
    .send({ error: "Access denied. Admins only.", userRole, user: req.user });
};
