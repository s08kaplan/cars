"use strict"
const express = require('express')
const app = express()
const process = require("node:process")
// const path = require('path');
const { cors } = require("./src/configs/requiredBasics")
const limiter = require("./src/middlewares/rateLimiter")


process.loadEnvFile(".env")
const HOST = process.env?.HOST || '127.0.0.1'
const PORT = process.env?.PORT || 8000

// Connect to DB:
const { dbConnection } = require('./src/configs/dbConnection')
dbConnection()


app.use(express.json())

app.use(express.urlencoded({extended:true}))


const corsOptions = {
  origin: ['https://127.0.0.1:5173', 'http://localhost:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true, 
};

app.use(cors(corsOptions))

//! LIMITER

app.use(limiter)

// Call static uploadFile:
// const uploadPath = path.join(__dirname, 'uploads');
// app.use('/uploads', express.static(uploadPath));
app.use('/uploads', express.static('./upload'))


app.use(require('./src/middlewares/authentication'))

// Run Logger:
// app.use(require('./src/middlewares/logger'))

// res.getModelList():
app.use(require('./src/middlewares/queryHandler'))


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


// errorHandler:
app.use(require('./src/middlewares/errorHandler'))

// RUN SERVER:
app.listen(PORT, HOST, () => console.log(`http://${HOST}:${PORT}`))

// Syncronization (must be in commentLine):
// require('./src/helpers/mockUsers')() // !!! It clear database.
// require("./src/helpers/mockCars")()