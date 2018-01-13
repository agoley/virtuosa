var compression = require('compression')
var express = require('express')
var app = express()
app.use(compression())

// ROUTING
var pages = require('./routes/pages.js')
app.use('/page', pages)

var templates = require('./routes/templates.js')
app.use('/template', templates)