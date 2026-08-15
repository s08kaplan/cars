"use strict";

const {
  mongoose: { Schema, model },
} = require("../configs/requiredBasics");

const userRoles = require("../constraints/role");
const { randomBytes } = require("node:crypto");

const {
  emailValidate,
  passwordEncrypt,
  encryptFunc,
} = require("../helpers/validationHelpers");

const UserSchema = new Schema(
  {
    firstName: {
      type: String,
      trim: true,
      required: true,
    },

    lastName: {
      type: String,
      trim: true,
      required: true,
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
      required: true,
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
      required: true,
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
