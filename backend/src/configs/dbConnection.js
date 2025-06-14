"use strict"

const { mongoose } = require("./requiredBasics")

const dbConnection = function() {
    mongoose.connect(process.env.MONGODB)
    .then(() => console.log("DB CONNECTED SUCCESSFULLY"))
    .catch(() => console.log("DB NOT connected"))
}

module.exports = {
     dbConnection
}