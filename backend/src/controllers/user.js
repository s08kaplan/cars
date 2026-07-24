"use strict";

const User = require("../models/user");

const {passwordEncrypt}  = require("../helpers/validationHelpers");
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
    console.log("create user req.body", req.body)
     const { firstName, lastName, password, role } = req.body

    if (!(firstName && lastName && password)) {
      return res.status(400).send({ error: true, message: "First name, last name and password are required" });
  }

  if(role === "1"){
    return res.status(401).send({
      error: true,
      message: "You are not allowed for this role"
    })
  }

  const data = await User.create(req.body)

    res.status(201).send({
      error: false,
       message: "User registered successfully",
      userData: data
    });
  },

  read: async (req, res) => {
   

    const data = await User.findOne({ _id: req.params.userId });
    

    res.status(200).send({
      error: false,
      data,
    });
  },

   update: async (req, res) => {
   /*  console.log("req.user in update controller: ", req.user); */
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

    const { firstName, lastName, email, password } = req.body;

    let updatePayload;

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
    //! TODO handle user image upload and path
    const file = req.file;

    if (file) {
      updatePayload.image = file.filename;
      // or file.path
      // or `/uploads/${file.filename}`
      // depending on your storage strategy
    }
/* 
    if (updatePayload.email) {
      const existing = await User.findOne({
        email: updatePayload.email,
        _id: { $ne: userId },
      });

      if (existing) {
        return res.status(409).json({
          error: true,
          message: "Email is already in use.",
        });
      }
    }
    let newPassword
    if (password) {
       newPassword = await passwordEncrypt(password);
    }

    updatePayload = {...updatePayload,password:newPassword}
 */
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
   const data = await User.updateOne({ _id: req.params.userId }, { isDeleted: true });
      
    res.status(200).send({  
      error: false, 
      message: "User account deleted successfully",
      data, 
    });

    
  },
   

  
};