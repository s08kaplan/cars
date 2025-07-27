"use strict";
const {express} = require("../configs/requiredBasics");
const requestIp = require("request-ip");
const UAParser = require("ua-parser-js");
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
    const ip = req.clientIp || req.ip;
    const parser = new UAParser();
    parser.setUA(req.headers["user-agent"]);
    const { browser, os, device } = parser.getResult();

    console.log(userAgent);
    console.log(ip);

    const data = await Visitor.create({
      ip,
      userAgent: {
        browser,
        os,
        device,
      },
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
  count: async (req, res) => {
    const data = await Visitor.countDocuments();
    res.status(200).send({
      error: false,
      data,
    });
  },
};
