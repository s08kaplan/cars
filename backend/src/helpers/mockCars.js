const Car= require("../models/car")
const { cars } = require("./mockCarsList")

const generateCars = async () => {
    try {
        await Car.deleteMany({})
        console.log("Cars data deleted")
        await Car.insertMany(cars)
        console.log("Cars data added")
    } catch (error) {
        console.error("Cars list not added :((((");
        
    }
}

module.exports = async () => {
    await generateCars()
}