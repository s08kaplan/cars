"use strict";

const {
  mongoose: { Schema, model },
} = require("../configs/requiredBasics");


const MessageSchema = new Schema(
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
      trim: true,
      required: [true, "Email field must be required"],
      validate: [
        (email) => {
          const regexEmailCheck =
            /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
          if(regexEmailCheck.test(email)) email
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
      required: true
     },
  },
  { collection: "messages", timestamps: true }
);

/* ------------------------------------------------------- */
module.exports = model("Message", MessageSchema);