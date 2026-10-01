"use strict";

const fs = require("fs");
const fsPromises = require("fs").promises;

const checkFileExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

const deleteEmpty = async (folderPath) => {
  try {
    const files = await fsPromises.readdir(folderPath);
    if (files.length === 0) {
      await fsPromises.rmdir(folderPath);
      console.log(`Deleted empty folder: ${folderPath}`);
    }
  } catch (err) {
    console.error(`Error deleting folder ${folderPath}:`, err);
  }
};

module.exports = { checkFileExists, deleteEmpty };