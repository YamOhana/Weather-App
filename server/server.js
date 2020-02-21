
const mongoose = require('mongoose')
const express = require('express')
const moment = require('moment')
const path = require('path')
const bodyParser = require('body-parser')
const api = require('./routes/api')
const City = require('./model/City')
const app = express()





app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


app.use(express.static(path.join(__dirname, "..", 'dist')))
app.use(express.static(path.join(__dirname, "..", 'node_modules')))

mongoose.connect('mongodb://localhost/WeatherApp', { useNewUrlParser: true, useUnifiedTopology: true })


app.use('/', api)



const port = 3000
app.listen(port, function () {
    console.log(`Running on port ${port}`)
})
