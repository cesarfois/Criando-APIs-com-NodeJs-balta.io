'use strict'

const express = require('express');
const router = express.Router();
const controller = require('../controllers/product-controller');
const authService = require('../services/auth-service')

// POST
router.get('/', controller.get)
router.get('/:slug', controller.getbySlug)
router.get('/admin/:id', controller.getbyId)
router.get('/tags/:tag', controller.getbyTags)
router.post('/', authService.authorize, controller.post);
router.put('/:id', authService.authorize, controller.put);
router.delete('/', authService.authorize, controller.delete);

module.exports = router;