"use strict";

const Car = require("../models/car");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Car);
    console.log("data in cars controller, ", data);
    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Car),
      data,
    });
  },

  create: async (req, res) => {
    const data = await Car.create(req.body);

    res.status(201).send({
      error: false,
      message: "Car registered successfully",
      data,
    });
  },

  read: async (req, res) => {
    const data = await Car.findOne({ _id: req.params.carId });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await Car.updateOne({ _id: req.params.carId }, req.body, {
      runValidators: true,
    });

    res.status(202).send({
      error: false,
      data,
      new: await Car.findOne({ _id: req.params.carId }),
    });
  },

  delete: async (req, res) => {
    const data = await Car.updateOne(
      { _id: req.params.carId },
      { isDeleted: true }
    );

    res.status(200).send({
      error: false,
      message: "Car account deleted successfully",
      data,
    });
  },
};
