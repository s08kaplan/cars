"use strict";

const {
  mongoose: { model, Schema },
} = require("../configs/mongoose");

const CarSchema = new Schema(
  {
    brandName: {
      type: String,
      trim: true,
      required: [true, "Brand name of the Car is required"],
      minLength: 1,
      maxLength: 50,
    },

    model: {
      type: String,
      trim: true,
      required: [true, "Car model is required"],
      minLength: 1,
      maxLength: 50,
    },

    year: {
      type: Number,
      required: true,
      min: [2000, "Less than 2000 model is not required"],
      max: [new Date().getFullYear(), "Newest Car of the model"],
    },

    vehicleIdentificationNumber: {
      type: String,
      trim: true,
      required: true,
      unique: true,
      uppercase: true,
      match: [/^[A-HJ-NPR-Z0-9]{17}$/, "Invalid VIN"],
    },

    color: {
      type: String,
      trim: true,
    },

    mileAge: {
      type: Number,
      required: true,
      min: 0,
    },

    fuelType: {
      type: String,
      enum: ["Petrol", "Diesel", "Electric", "Hybrid"],
      required: [true, "Please enter a valid fuel type"],
    },

    transmission: {
      type: String,
      enum: ["Automatic", "Manual"],
      required: [true, "Please enter a valid transmission"],
    },

    price: {
      type: Number,
      required: true,
      default: 0,
    },

    available: {
      type: Boolean,
      default: true,
    },

    features: {
      type: [String],
      default: [],
    },

    trafficInfo: {
      accidentCount: { type: Number, default: 0 },
      lastAccidentDate: Date,
      fines: [
        {
          date: Date,
          reason: String,
          amount: Number,
        },
      ],
    },

    insuranceStatus: {
      provider: String,
      policyNumber: String,
      validFrom: Date,
      validUntil: Date,
      isActive: { type: Boolean, default: false },
    },

    legalStatus: {
      hasCriminalRecord: { type: Boolean, default: false },
      hasDebt: { type: Boolean, default: false },
      notes: String,
    },

    inspectionStatus: {
      lastInspectionDate: Date,
      passed: Boolean,
      nextDueDate: Date,
      exhaustEmissionLevel: {
        type: String,
        enum: ["Low", "Moderate", "High"],
      },
    },

    tollInfo: {
      hgsActive: { type: Boolean, default: false },
      ogsActive: { type: Boolean, default: false },
      balance: { type: Number, default: 0 },
      recentPasses: [
        {
          date: Date,
          location: String,
          cost: Number,
        },
      ],
    },
  },
  {
    collection: "cars",
    timestamps: true,
  }
);

module.exports = model("Car", CarSchema);
