"use strict"

const morgan = require('morgan')
const fs = require('node:fs')
const path = require('node:path')

const logsDir = path.join(process.cwd(), "logs");
if (!fs.existsSync(logsDir)) {
  fs.mkdirSync(logsDir, { recursive: true });
}

const now = new Date()
const today = now.toISOString().split('T')[0]


module.exports = morgan('combined', {
    stream: fs.createWriteStream(`${logsDir}/${today}.log`, { flags: 'a+' })
})