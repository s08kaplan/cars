"use strict"

const { mongoose: { connection } } = require("../configs/requiredBasics")
const { dbConnection } = require("../configs/dbConnection")
const User = require("../models/user")
const { faker }  = require("@faker-js/faker")
const { passwordEncrypt } = require("./validationHelpers")
const { randomBytes } = require("node:crypto");

const createFakeUsers = async (count=10) => {
    try {
      await User.deleteMany({})
       console.log("Users deleted");
      const users = []
  
      const generatePassword = (minLength = 6, maxLength = 16, includeSymbols = true) => {
        const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
        const symbols = "@$!%*?&";
        const base = includeSymbols ? charset + symbols : charset;
  
        const length = maxLength
        ? faker.number.int({ min: minLength, max: maxLength })
        : minLength;
      
        const password = Array.from({ length }, () => 
          base[Math.floor(Math.random() * base.length)]
        ).join('');

        // Add required characters if missing
        let finalPassword = password;
        if (!/[A-Z]/.test(finalPassword)) finalPassword += 'A';
        if (!/[a-z]/.test(finalPassword)) finalPassword += 'a';
        if (!/\d/.test(finalPassword)) finalPassword += '1';
        if (!/[@$!%*?&]/.test(finalPassword)) finalPassword += '@';

        return finalPassword;
      };
  
      for (let i = 0; i < count; i++) {
        const password = generatePassword(8, 15, true);
         const salt = randomBytes(16).toString('hex');
        const hashedPassword = passwordEncrypt(password, salt);

        const user = {
          firstName: faker.person.firstName(),
          lastName: faker.person.lastName(),
          email: faker.internet.email(),
          // password: faker.internet.password(6, true, true), 
          password: hashedPassword,
          salt,
          contactNumber: faker.number.int({ min: 10000000000, max: 99999999999 }).toString(),
         // department:faker.number.int({ min: 1, max: 6 }),
          role: faker.number.int({ min: 1, max: 3 }),
         // grade: faker.number.int({ min: 9, max: 13 }), 
          isActive: faker.datatype.boolean(),
          // isAdmin: faker.datatype.boolean(),
        //  gender: faker.helpers.arrayElement(['male', 'female', 'other']),
          image: faker.image.avatar(),
        };
  
        console.log("salt is adding to all users ");
        const usersCollection = connection.collection("users");
        const usersWithoutSalt = await usersCollection
          .find({ salt: { $exists: false } })
          .toArray();
          console.log(`Users without salt:`, usersWithoutSalt);
        for (const user of usersWithoutSalt) {
          if (!user.password || user.password.length > 32) {
            console.error(`Skipping user ${user._id} - invalid or already hashed password.`);
            continue;
          }
        
        }
       
        users.push(user);
      }
      console.log("Salt has been added to all users!");
      await User.insertMany(users)
      console.log(`${count} fake users created successfully!`);
    } catch (error) {
      console.error('Error creating fake users:', error);
    }
  }
  

  module.exports = async () => {
    await dbConnection()
    await createFakeUsers()
  }