"use strict"

const { mongoose:{ Schema, model} } = require("../configs/requiredBasics");

const DashboardCarSchema = new Schema({
   
    filename: String,
    path: String,
    originalName: String,
    mimetype: String,
    size: Number,
    type: String, 

}, {
    collection:"dashboard_cars",
    timestamps: true
})

module.exports = model("DashboardCar", DashboardCarSchema)