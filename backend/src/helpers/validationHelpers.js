"use strict";

const { pbkdf2Sync } = require("node:crypto");

const loopCount = 10_000;
const charCount = 32;
const encType = "sha512";

const encryptFunc = (password, salt) => {
  if (!password) {
    throw new Error("Password is required for encryption.");
  }
  if (!salt) {
    throw new Error("Salt is undefined for this user.");
  }
  return pbkdf2Sync(password, salt, loopCount, charCount, encType).toString("hex");
};

//* Password conditions and Encrypt
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,20}$/;

const passwordEncrypt = (password, salt) => {
  if (passwordRegex.test(password)) {
    return encryptFunc(password, salt);
  } else {
    throw new Error(
      "Password must be 6-20 characters long and include uppercase, lowercase, digit, and special character."
    );
  }
};

//* Email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const emailValidate = (email) => {
  if (emailRegex.test(email)) {
    return email;
  }
  throw new Error("Please provide a valid email address.");
};

module.exports = {
  passwordEncrypt,
  emailValidate,
  encryptFunc,
};