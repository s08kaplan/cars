"use strict";

const jwt = require("../configs/requiredBasics").jwt;


module.exports = async (req, res, next) => {
 try {
    const token = req.cookies?.accessToken;
    console.log("Headers:", req.headers);
console.log("Cookie header:", req.headers.cookie);
console.log("Cookies:", req.cookies);
    if (!token) {
      return res.status(401).send({
        error: true,
        message: "Access token is missing. Please login.",
      });
    }

    const decoded = jwt.verify(token, process.env.ACCESS_KEY);

    req.user = { id: decoded.id };

    return next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      return res.status(401).send({
        error: true,
        message: "Token expired. Please login again.",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(401).send({
        error: true,
        message: "Invalid token. Please login again.",
      });
    }

    console.error("Auth middleware error:", error);
    return res.status(500).send({
      error: true,
      message: "Internal server error",
    });
  }
};
