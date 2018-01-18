var express = require('express');
var router = express.Router();
var secret = process.env.JWT_SECRET || 'changeme';
var expressJWT = require('express-jwt');
var templateService = require('../services/template.service.js');

// ROUTES
router.put('', createTemplate);
router.route('/:id')
    .get('/:id', getTemplate)
    .delete(expressJWT({ secret: secret }), deleteTemplate)
    .post(expressJWT({ secret: secret }), updateTemplate)

module.exports = router;

function getTemplate(req, res) { templateService.get(req, res) };
function updateTemplate(req, res) { templateService.update(req, res) };
function deleteTemplate(req, res) { templateService.delete(req, res) };
function createTemplate(req, res) { templateService.create(req, res) };
