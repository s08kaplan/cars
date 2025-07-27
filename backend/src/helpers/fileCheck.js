"use strict"

const fs = require("fs")
const path = require("path")

const checkFileExists = ( dir ) => {
    if(!fs.existsSync(dir)){
        fs.mkdirSync(dir, { recursive: true })
    }
}

const deleteEmpty = (folderPath) => {
    fs.readdir(folderPath, (err, files) => {
        if(!err && files.length === 0) {
            fs.rmdir(folderPath, (err) => {
                if(!err) console.error(`Deleted empty folder: ${folderPath}`);
                
            })
        }
    })
}

module.exports = { checkFileExists, deleteEmpty }