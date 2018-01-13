var express = require('express');
var router = express.Router();
var secret = process.env.JWT_SECRET || 'changeme';
var expressJWT = require('express-jwt');
var pageService = require('../services/page.service.js');

// ROUTES
router.get('/:name', getPage);
router.put('', createPage);
router.route('/:id')
    .delete(expressJWT({ secret: secret }), deletePage)
    .post(expressJWT({ secret: secret }), updatePage);

module.exports = router;

function getPage(req, res) { pageService.get(req, res) };
function updatePage(req, res) { pageService.update(req, res) };
function deletePage(req, res) { pageService.delete(req, res) };
function createPage(req, res) { pageService.create(req, res) };
