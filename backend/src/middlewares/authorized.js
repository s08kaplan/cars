"use strict"

const role = require("../constraints/role")
const admin = Object.values(role)[0]

 
module.exports = (req, res, next) => {
  const userRole = req.user?.role;
  const role = req.cookies.role == 1 
  const checkName =  req.cookies.lastName === "Garip"

 /*  if (userRole === admin) {
    return next();
  } */

  if(role && checkName){
    return next()
  }

  return res.status(403).send({ error: "Access denied. Admins only.",
    userRole
   });
};
