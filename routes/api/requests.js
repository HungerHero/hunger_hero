const express = require('express');
const router = express.Router();
const requestsCtrl = require('../../controllers/api/requests');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/',ensureLoggedIn, requestsCtrl.create)
router.get('/:id',ensureLoggedIn, requestsCtrl.getRequest)
router.get('/',ensureLoggedIn, requestsCtrl.index)
router.get('/users',ensureLoggedIn, requestsCtrl.getRequesterUser)

module.exports = router;