"use strict"

//* Encrypt 
const { pbkdf2Sync, randomBytes  } = require("node:crypto"),

//  keyCode = process.env.SECRET_KEY,
 loopCount = 10_000,
 charCount = 32,
 encType = "sha512";

const encryptFunc = (password, salt) => {
    if (!salt) {
        throw new Error("Salt is undefined for this user.");
      }
    return pbkdf2Sync(password, salt, loopCount, charCount, encType).toString("hex")
}

//* password conditions and Encrypt
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{6,20}$/

const passwordEncrypt = (password,salt) => {
    if(passwordRegex.test(password)){
      return  encryptFunc(password,salt)
    } else {
        throw new Error("Please provide the credentials for your password")
    }
}


//* Checking Email conditions 
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
const emailValidate = (email) => {
    if(emailRegex.test(email)) {
        return email
    }
    throw new Error("Please check your email")
}

module.exports = {
    passwordEncrypt, emailValidate, encryptFunc
}