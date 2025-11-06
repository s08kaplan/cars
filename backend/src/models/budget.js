"use strict"

const { mongoose: { Schema, model }} = require("../configs/requiredBasics")

const BudgetSchema = new Schema({
      type: {
        type: String,
        enum: ["income", "expense"],
        required: true,
      },
      addedBy: {
        name: String,
        trim: true,
        required: true,
        index: true
      },
      amount: {
        type: Number,
        required: true,
        default: 0,
      },
      explanation: {
        type: String,
        trim: true,
      },
  
}, {
    collections:"budgets",
    timestamps: true
})

module.exports = model("Budget", BudgetSchema)