const cors = require("cors")
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const express = require("express")
const expressAsyncErrors = require("express-async-errors")
const jwt = require("jsonwebtoken")

module.exports = {
    cors,
    mongoose,
    dotenv,
    express,
    expressAsyncErrors,
    jwt
}