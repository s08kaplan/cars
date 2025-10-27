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
   
    const data = await User.updateOne({ _id: req.params.userId }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await User.findOne({ _id: req.params.id }),
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