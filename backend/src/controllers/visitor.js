"use strict";
const express = require('express');
const requestIp = require('request-ip');
const useragent = require('useragent');
const Visitor = require("../models/visitor");

const app = express();
app.use(requestIp.mw());

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Visitor);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Visitor),
      data,
    });
  },

  create: async (req, res) => {
    const ip = req.ip;
    const userAgent = useragent.parse(req.headers['user-agent']);

    console.log(userAgent);
    console.log(ip);
  
    const data = await Visitor.create({
        ip,
        userAgent: userAgent
      });

    res.status(201).send({
      error: false,
      VisitorData: data,
    });
  },

  read: async (req, res) => {
    const data = await Visitor.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Visitor.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      data,
      new: await Visitor.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Visitor.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !!!data.deletedCount,
      data,
    });
  },
  count : async (req, res) => {
    const data = await Visitor.countDocuments();
    res.status(200).send({
      error: false,
      data
    });
  }
};