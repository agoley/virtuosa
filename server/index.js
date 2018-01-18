var compression = require('compression')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(compression())

// ROUTING
var pages = require('./controllers/pages.controller.js')
app.use('/page', pages)

var templates = require('./controllers/templates.controller.js')
app.use('/template', templates)

// SERVER CONFIG
var port = process.env.PORT || 8081;
// START THE SERVER
app.listen(port, () => { console.log('ash listening at %s', port) });