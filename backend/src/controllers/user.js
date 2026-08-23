"use strict";

const User = require("../models/user");
const Upload = require("../models/upload");

const { passwordEncrypt } = require("../helpers/validationHelpers");
// const jwt = require("jsonwebtoken");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(User);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(User),
      data,
    });
  },

  create: async (req, res) => {
    try {
      console.log("create user req.body", req.body);
      const { firstName, lastName, password, role, email, contactNumber } =
        req.body;
      const file = req.file;

      if (!(firstName && lastName && password && contactNumber)) {
        return res.status(400).send({
          error: true,
          message: "First name, last name, email, contact number and password are required",
        });
      }

      if (role === "1") {
        return res.status(401).send({
          error: true,
          message: "You are not allowed for this role",
        });
      }

      let imagePath = req.body.image || "";

      if (file) {
        const normalizedPath = file.path.replace(/\\/g, "/");
        imagePath = normalizedPath.startsWith("/")
          ? normalizedPath
          : `/${normalizedPath}`;
      }

      const data = await User.create({
        firstName: firstName.trim(),
        lastName: lastName.trim(),
        email: email.trim().toLowerCase(),
        contactNumber: contactNumber ? contactNumber.trim() : "",
        password: password.trim(),
        role: role || "2",
        image: imagePath,
      });

      const userResponse = data.toObject();
      delete userResponse.password;

      res.status(201).send({
        error: false,
        message: "User registered successfully",
        user: userResponse,
      });
    } catch (error) {
      console.error("User Creation Error:", error);
      res.status(500).send({
        error: true,
        message: error.message || "Internal server error",
      });
    }
  },

  read: async (req, res) => {
    const data = await User.findOne({ _id: req.params.userId });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    console.log("req.user in update controller: ", req.user);
    const { userId } = req.params;

    if (!userId) {
      return res.status(400).json({
        error: true,
        message: "User ID is required.",
      });
    }

    if (!req.user) {
      return res.status(401).json({
        error: true,
        message: "Unauthorized.",
      });
    }

    if (req.user.id.toString() !== userId) {
      return res.status(403).json({
        error: true,
        message: "You are not authorized to update this user.",
      });
    }

    const updatePayload = {};

    const { firstName, lastName, email, password, image, contactNumber } =
      req.body;

    if (typeof firstName === "string" && firstName.trim().length > 0) {
      updatePayload.firstName = firstName.trim();
    }

    if (typeof lastName === "string" && lastName.trim().length > 0) {
      updatePayload.lastName = lastName.trim();
    }

    if (typeof email === "string" && email.trim().length > 0) {
      updatePayload.email = email.trim().toLowerCase();
    }

    if (typeof password === "string" && password.trim().length > 0) {
      updatePayload.password = passwordEncrypt(password);
    }

    if (typeof image === "string") {
      updatePayload.image = image.trim();
    }

    const file = req.file;

    if (file) {
      const normalizedPath = file.path.replace(/\\/g, "/");
      updatePayload.image = `/${normalizedPath}`;
    }

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: updatePayload,
      },
      {
        new: true,
        runValidators: true,
      },
    ).select("-password");

    if (!updatedUser) {
      return res.status(404).json({
        error: true,
        message: "User not found.",
      });
    }

    return res.status(200).json({
      error: false,
      message: "Profile updated successfully.",
      user: updatedUser,
    });
  },

  delete: async (req, res) => {
    const data = await User.updateOne(
      { _id: req.params.userId },
      { isDeleted: true },
    );

    res.status(200).send({
      error: false,
      message: "User account deleted successfully",
      data,
    });
  },
};
