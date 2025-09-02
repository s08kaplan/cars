"use strict"

const { mongoose: { Schema, model }} = require("../configs/requiredBasics")

const BudgetSchema = new Schema({
    income:{
      amount: {
      type: Number,
      required: true,
      index: true,
      default: 0
    },
     explanation: {
       type: String,
       trim: true,
    },
    },

    outcome: {
      amount: {
        type: Number,
        required: true,
        index: true,
        default: 0
    },
      explanation: {
        type: String,
        trim: true,
    },
    }
}, {
    collections:"budgets",
    timestamps: true
})

module.exports = model("Budget", BudgetSchema)