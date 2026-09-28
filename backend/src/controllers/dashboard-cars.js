"use strict";
const fs = require("fs");
const path = require("path");
const DashboardCars = require("../models/dashboard-cars");
const { deleteEmpty } = require("../helpers/fileCheck");

module.exports = {
  list: async (req, res) => {
    const data = await res.getModelList(DashboardCars);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(DashboardCars),
      data,
    });
  },

  create: async (req, res) => {
    const { files } = req;

    if (!files || files.length === 0) {
      return res.status(400).send({
        error: true,
        message: "No Files uploaded.",
      });
    }

    const fileData = files.map((file) => ({
      filename: file.filename,
      path: file.path.replace(/\\/g, "/"),
      originalName: file.originalname,
      mimetype: file.mimetype,
      size: file.size,
      type: "dashboard",
    }));

    const newFiles = await DashboardCars.insertMany(fileData);

    res.status(200).send({
      message: "Files Uploaded successfully",
      files: newFiles,
    });
  },

  read: async (req, res) => {
    const data = await DashboardCars.findOne({ _id: req.params.dashboardCarId });

    res.status(200).send({
      error: false,
      data,
    });
  },

  update: async (req, res) => {
    const data = await DashboardCars.updateOne(
      { _id: req.params.dashboardCarId },
      req.body,
      {
        runValidators: true,
      },
    );

    res.status(202).send({
      error: false,
      data,
      new: await Upload.findOne({ _id: req.params.dashboardCarId }),
    });
  },

  delete: async (req, res) => {
    try {
      const upload = await DashboardCars.findById(req.params.uploadId);
      if (!upload) {
        return res.status(404).send({
          error: true,
          message: "Upload not found",
        });
      }

      const filePath = path.resolve(upload.path);
      const data = await DashboardCars.deleteOne({ _id: req.params.dashboardCarId });
      //console.log(req.params.dashboardCarId);
     
        require("fs").unlinkSync(filePath);
      deleteEmpty(path.dirname(filePath));
      res.status(200).send({
        error: false,
        message: "Deleted successfully!!!",
      });
    } catch (err) {
      res.status(500).send({
        error: true,
        message: "Server error",
      });
    }
  },
};
