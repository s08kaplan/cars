"use strict";

const User = require("../models/user");
const jwt = require("../configs/requiredBasics").jwt;
const { encryptFunc } = require("../helpers/validationHelpers");
const process = require("node:process")

process.loadEnvFile(".env")

const ACCESS_KEY = process.env.ACCESS_KEY;
const REFRESH_KEY = process.env.REFRESH_KEY;

const generateToken = (user) => {
  const accessToken = jwt.sign(
    {
      id: user._id,
      role: user.role,
      firstName: user.firstName,
      lastName: user.lastName,
    },
    ACCESS_KEY,
    { expiresIn: "15m" }
  );

  const refreshToken = jwt.sign({ id: user._id }, REFRESH_KEY, {
    expiresIn: "7d",
  });

  return { accessToken, refreshToken };
};

module.exports = {
  login: async (req, res) => {
    try {
      const { email, password } = req.body;
     console.log("email: ", email)
     console.log("password: ", password)
      if (!(email?.trim() && password?.trim())) {
        return res.status(400).send({
          error: true,
          message: "Email and password must be entered",
        });
      }

      const user = await User.findOne({ email });
      console.log("user: ", user)
      if (!user) {
        return res.status(401).send({
          error: true,
          message:
            "Credentials are wrong please check your email and password",
        });
      }

      const userSalt = user.salt;
      const hashedPassword = encryptFunc(password, userSalt);

      if (user.password !== hashedPassword) {
        return res.status(401).send({
          error: true,
          message: "Invalid password",
        });
      }

      if (user.isDeleted) {
        return res.status(403).send({
          error: true,
          message: "Account has been deleted",
        });
      }

      const { accessToken, refreshToken } = generateToken(user);

      res.cookie("accessToken", accessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 15 * 60 * 1000, // 15 minutes
      });

      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/auth/refresh-token",
        maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
      });

      return res.status(200).send({
        error: false,
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          role: user.role,
        },
      });
    } catch (error) {
      console.error("Login error:", error);
      return res.status(500).send({
        error: true,
        message: "Internal server error",
      });
    }
  },

  refresh: async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;

      if (!refreshToken) {
        return res.status(401).send({
          error: true,
          message: "Refresh token is required",
        });
      }

      const decoded = jwt.verify(refreshToken, REFRESH_KEY);

      const user = await User.findById(decoded.id);
      if (!user || user.isDeleted) {
        throw new Error("Invalid user");
      }

      const newAccessToken = jwt.sign(
        {
          id: user._id,
          role: user.role,
          firstName: user.firstName,
          lastName: user.lastName,
        },
        ACCESS_KEY,
        { expiresIn: "15m" }
      );

      res.cookie("accessToken", newAccessToken, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: 15 * 60 * 1000, // 15 minutes
      });

      return res.send({
        error: false,
        message: "Access token refreshed successfully",
      });
    } catch (error) {
      console.error("Refresh token error:", error);
      return res.status(403).send({
        error: true,
        message: "Invalid refresh token",
      });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("accessToken", {
        path: "/",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      res.clearCookie("refreshToken", {
        path: "/auth/refresh-token",
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
      });

      return res.status(200).send({
        error: false,
        message: "Logged out successfully",
      });
    } catch (error) {
      console.error("Logout error:", error);
      return res.status(500).send({
        error: true,
        message: "Error during logout",
      });
    }
  },

  verifyToken: async (req, res) => {
    try {
      let accessToken = req.cookies.accessToken;
      console.log("accessToken in the verify token: ", accessToken);

      if (!accessToken) {
        const authHeader = req.headers.authorization;
        if (authHeader && authHeader.startsWith("Bearer ")) {
          accessToken = authHeader.split(" ")[1];
        }
      }

      console.log("accessToken in verify token: ", accessToken);
      console.log("ACCESS_SECRET defined:", !!ACCESS_KEY);

      if (!accessToken) {
        return res.status(401).send({
          error: true,
          message: "No access token found",
        });
      }

      console.log("🔍 Attempting to verify token...");
      const decoded = jwt.verify(accessToken, ACCESS_KEY);

      const user = await User.findById(decoded.id);
      if (!user || !user.isActive || user.isDeleted) {
        throw new Error("Invalid user");
      }

      return res.send({
        valid: true,
        user: {
          id: decoded.id,
          role: decoded.role,
          firstName: decoded.firstName,
          lastName: decoded.lastName,
        },
      });
    } catch (error) {
      console.error("Token verification error:", error);

      if (error.name === "TokenExpiredError") {
        return res.status(401).send({
          valid: false,
          message: "Token expired",
          shouldRefresh: true,
        });
      }

      return res.status(403).send({
        valid: false,
        message: "Invalid token",
      });
    }
  },
};
