"use strict";

const Message = require("../models/message");
const { count } = require("./visitor");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Message);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Message),
      data,
    });
  },

  create: async (req, res) => {

  
    const data = await Message.create(req.body);

    res.status(201).send({
      error: false,
      MessageData: data,
    });
  },

  read: async (req, res) => {
    const data = await Message.findOne({ _id: req.params.id });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Message.updateOne({ _id: req.params.id }, req.body);

    res.status(202).send({
      error: false,
      data,
      new: await Message.findOne({ _id: req.params.id }),
    });
  },

  delete: async (req, res) => {
    const data = await Message.deleteOne({ _id: req.params.id });

    res.status(data.deletedCount ? 204 : 404).send({
      error: !!!data.deletedCount,
      data,
    });
  },
  count: async (req, res) => {
    const data = await Message.countDocuments();
    res.status(200).send({
      error: false,
      data,
    });
  },
  unRead: async (req, res) => {
    const data = await Message.countDocuments({ isRead: false });
    res.status(200).send({
      error: false,
      data,
    });
  },
  recent: async (req, res) => {
    const data = await Message.find().sort({ createdAt: -1 }).limit(5);
    res.status(200).send({
      error: false,
      data,
    });
  },
};