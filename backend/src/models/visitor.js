"use strict";

const {
  mongoose: { Schema, model },
} = require("../configs/dbConnection");

// Visitor Model:

const VisitorSchema = new Schema(
  {
    ip: String,
    userAgent: Object,
  },
  { collection: "visitors", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = model("Visitor", VisitorSchema);