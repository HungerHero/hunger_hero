const express = require('express');
const router = express.Router();
const requestsCtrl = require('../../controllers/api/requests');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/users',ensureLoggedIn, requestsCtrl.getRequesterUser)
router.post('/',ensureLoggedIn, requestsCtrl.create)
router.get('/:id',ensureLoggedIn, requestsCtrl.getRequest)
router.get('/',ensureLoggedIn, requestsCtrl.index)

module.exports = router;