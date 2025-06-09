"use strict"
const express = require('express')
const app = express()
// const path = require('path');
const limiter = require("./src/middlewares/rateLimiter")

/* ------------------------------------------------------- */
// Required Modules:

// envVariables to process.env:
require('dotenv').config()
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

// asyncErrors to errorHandler:
require('express-async-errors')

/* ------------------------------------------------------- */
// Configrations:

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()

// Middlewares:

// Accept JSON:
app.use(express.json())

app.use(express.urlencoded({extended:true}))

// CORS:
app.use(require('cors')()) // Run with defaults.

//! LIMITER

app.use(limiter)

// Call static uploadFile:
// const uploadPath = path.join(__dirname, 'uploads');
// app.use('/uploads', express.static(uploadPath));
app.use('/uploads', express.static('./upload'))

// Check Authentication:
app.use(require('./src/middlewares/authentication'))

// Run Logger:
// app.use(require('./src/middlewares/logger'))

// res.getModelList():
app.use(require('./src/middlewares/queryHandler'))

/* ------------------------------------------------------- */
// Routes:

// HomePath:
app.all('/', (req, res) => {
    res.send({
        error: false,
        message: 'Welcome to CAR API',
        user: req.user
    })
})

// Routes:
app.use(require('./src/routes'))

/* ------------------------------------------------------- */

// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))

/* ------------------------------------------------------- */
// Syncronization (must be in commentLine):
// require('./src/helpers/sync')() // !!! It clear database.