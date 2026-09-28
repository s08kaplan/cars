"use strict";

const multer = require("multer");
const path = require("path");
const { sanitizeCarName } = require("../helpers/sanitize");
const { checkFileExists } = require("../helpers/fileCheck");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    //console.log("Middleware - req.body.brandName:", req.body.brandName);
    const brand = req.body.brandName || req.body.type;
    const url = req.baseUrl || req.originalUrl || "";

    let folder = "";
    if (url.includes("/dashboard-cars") || brand === "dashboard") {
      folder = path.join("uploads", "dashboard");
    } else if (brand) {
      const safeBrandName = sanitizeCarName(brand);
      folder = path.join("uploads", safeBrandName);
    } else if (url.includes("/users")) {
      folder = path.join("uploads", "users");
    } else {
      folder = path.join("uploads", "others");
    }

    //console.log("Middleware - Dynamic folder created:", folder);
    checkFileExists(folder);
    cb(null, folder);
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

// const upload = multer({ storage })

const upload = multer({ storage });

// module.exports = upload
module.exports = {
  single: upload.single("file"), // For single file uploads
  multiple: upload.array("files", 10), // For multiple file uploads
};
