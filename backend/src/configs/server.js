"use strict";
const { dbConnection } = require("./dbConnection");
const { createFakeUsers } = require("../helpers/mockUsers"); // !!! It clear database.
const { generateCars } = require("../helpers/mockCars");

const PORT = process.env.PORT;
const HOST = process.env.HOST;

const startServer = async (app) => {
  await dbConnection();
  /* if(process.env.NODE_ENV ==="development" && process.env.SEED_DB) {
     await createFakeUsers();
     await generateCars();
  } */
 
  app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`));
};

module.exports = startServer