// =================================================  Variables ============================================

// load express app
const express = require('express')
const app = express()

// load env 
require('dotenv').config()

// load api route
const apis = require('./src/routes/route.js')

// load database
const databaseConnection = require('./src/config/database.config')

// ===========================================================================================================

databaseConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))    

app.use('/api', apis)

app.listen(
  process.env.PORT,
  () => {
    console.log(`User service is running on port ${process.env.PORT}`)
  }
)