"use strict";

const role = require("../constraints/role");
const adminRole = Object.keys(role)[0];
const jwt = require("../configs/requiredBasics").jwt;

module.exports = (req, res, next) => {
  const token = req.cookies?.accessToken;

  if (!token) {
    return res.status(401).json({
      error: true,
      message: "Access denied. No token provided.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.ACCESS_KEY);
    req.user = { id: decoded.id, role: decoded.role };

    if (req.user.role === adminRole) {
      return next();
    }

    return res.status(403).send({
      error: true,
      message: "Access denied. Admins only.",
    });
  } catch (error) {
    return res.status(401).send({
      error: true,
      message: "Invalid or expired token.",
    });
  }
};