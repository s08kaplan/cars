"use strict";

const {
  mongoose: { Schema, model },
} = require("../configs/requiredBasics");

const userRoles = require("../constraints/role");
const { randomBytes } = require("node:crypto");

const {
  emailValidate,
  passwordEncrypt,
} = require("../helpers/validationHelpers");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: [true, "First name is required."],
    },

    lastName: {
      type: String,
      trim: true,
      required: [true, "Last name is required."],
    },

    email: {
      type: String,
      required: true,
      unique: true,
      set: (email) => emailValidate(email),
    },

    contactNumber: {
      type: String,
      trim: true,
      required: [true, "Contact number is required."],
      unique: true,
    },

    password: {
      type: String,
      trim: true,
      required: true,
      select: false,
    },

    image: {
      type: String,
      trim: true,
    },

    role: {
      type: String,
      required: [true, "Role is required."],
      enum: {
        values: Object.keys(userRoles).map((key) => Number(key)),
        message: "Please enter a valid role",
      },
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },

    salt: {
      type: String,
      required: true,
      default: () => randomBytes(16).toString("hex"),
      select: false, // Hidden by default
    },
  },
  {
    collection: "users",
    timestamps: true,
    versionKey: false,
  },
);

UserSchema.virtual("roleLabel").get(function () {
  return userRoles[this.role];
});

UserSchema.set("toJSON", { virtuals: true });
UserSchema.set("toObject", { virtuals: true });

UserSchema.pre("save", async function () {
  if (this.isModified("password")) {
    const salt = randomBytes(16).toString("hex");
    this.salt = salt;

    this.password = passwordEncrypt(this.password, salt);
  }
});

module.exports = model("User", UserSchema);
