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
    try {
      const { id } = req.params;
      const { isRead } = req.body;

      // Validate that id exists and isRead was provided in request body
      if (typeof isRead === "undefined") {
        return res.status(400).send({
          error: true,
          message: "isRead status is required",
        });
      }

      const targetStatus =
        typeof isRead === "boolean" ? isRead : isRead === "true";

      const data = await Message.findByIdAndUpdate(
        id,
        { $set: { isRead: targetStatus } },
        { returnDocument: 'after', runValidators: true },
      );

      if (!data) {
        return res.status(404).send({
          error: true,
          message: "Message not found",
        });
      }

      return res.status(202).send({
        error: false,
        data,
      });
    } catch (error) {
      console.error("Error updating message status:", error);
      return res.status(500).send({
        error: true,
        message: error.message,
      });
    }
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
