"use strict";

const Car = require("../models/car");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(Car);
    /* console.log("data in cars controller, ", data); */
    const details = await res.getModelListDetails(Car);
    res.status(200).send({
      error: false,
      details,
      data,
    });
  },

  create: async (req, res) => {
    try {
      const {
        brandName,
        model,
        typeOfCar,
        year,
        color,
        mileAge,
        fuelType,
        transmission,
        boughtPrice,
        requiredPrice,
        soldPrice,
        carStatus,
        vehicleIdentificationNumber,
        available,
        features,
        trafficInfo,
        insuranceStatus,
        legalStatus,
        inspectionStatus,
        tollInfo,
        image,
      } = req.body;

      const sanitizedCarPayload = {
        brandName: brandName?.trim(),
        model: model?.trim(),
        typeOfCar,
        year: Number(year),
        color: color?.trim(),
        mileAge: Number(mileAge),
        fuelType,
        transmission,
        boughtPrice: Number(boughtPrice),
        requiredPrice: requiredPrice ? Number(requiredPrice) : undefined,
        soldPrice: soldPrice ? Number(soldPrice) : undefined,
        carStatus: carStatus || "Waiting",
        vehicleIdentificationNumber: vehicleIdentificationNumber
          ?.trim()
          .toUpperCase(),
        available: typeof available === "boolean" ? available : true,
        features: Array.isArray(features)
          ? features.filter((f) => typeof f === "string" && f.trim() !== "")
          : [],
        image: Array.isArray(image) ? image : [],
        trafficInfo,
        insuranceStatus,
        legalStatus,
        inspectionStatus,
        tollInfo,
      };

    
      const newCar = await Car.create(sanitizedCarPayload);

      return res.status(201).json({
        error: false,
        message: "Car successfully registered",
        data: newCar,
      });
    } catch (error) {
     
      if (error.name === "ValidationError") {
        const messages = Object.values(error.errors).map((val) => val.message);
        return res.status(400).json({
          error: true,
          message: "Validation Failed",
          details: messages,
        });
      }

      if (error.code === 11000) {
        return res.status(409).json({
          error: true,
          message: "A vehicle with this VIN already exists.",
        });
      }

      return res.status(500).json({
        error: true,
        message: "Internal Server Error",
      });
    }
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
      { isDeleted: true },
    );

    res.status(200).send({
      error: false,
      message: "Car account deleted successfully",
      data,
    });
  },
};
