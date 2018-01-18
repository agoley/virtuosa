var compression = require('compression')
var express = require('express')
var app = express()
app.use(compression())

// ROUTING
var pages = require('./controllers/pages.controller.js')
app.use('/page', pages)

var templates = require('./controllers/templates.controller.js')
app.use('/template', templates)