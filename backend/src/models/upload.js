"use strict"

const { mongoose:{ Schema, model} } = require("../configs/requiredBasics");

const UploadSchema = new Schema({
   
    filename: String,
    path: String,
    originalName: String,
    mimetype: String,
    size: Number,
    type: String, 

}, {
    collection:"uploads",
    timestamps: true
})

module.exports = model("Upload", UploadSchema)