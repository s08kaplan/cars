"use strict"

const { mongoose } = require("./requiredBasics")

const dbConnection = async function() {
    try {
        await mongoose.connect(process.env.MONGODB)
        console.log("DB CONNECTED SUCCESSFULLY")
    } catch (err) {
        console.error("DB NOT connected", err)
    }
}

module.exports = { dbConnection }