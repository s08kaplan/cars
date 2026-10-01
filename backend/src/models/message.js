"use strict";

const {
  mongoose: { Schema, model },
} = require("../configs/requiredBasics");

const MessageSchema = new Schema(
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
      trim: true,
      required: [true, "Email field is required"],
      validate: [
        (email) => {
          const regexEmailCheck =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if (regexEmailCheck.test(email)) email;
        },
        "Email type is not correct.",
      ],
    },
    phone: {
      type: String,
      trim: true,
    },
    isRead: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      maxLength: 100,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { collection: "messages", timestamps: true, versionKey: false },
);

module.exports = model("Message", MessageSchema);
