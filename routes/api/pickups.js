const express = require('express');
const router = express.Router();
const pickupsCtrl = require('../../controllers/api/pickups');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

router.post('/', ensureLoggedIn, pickupsCtrl.createPickup);
router.get('/receiver/:id', pickupsCtrl.getReceiverPickups);
router.get('/distributor/:id', pickupsCtrl.getDistributorPickups);
// router.get('/:id', pickupsCtrl.getPickup);
// router.put('/:id', ensureLoggedIn, pickupsCtrl.updatePickup);
// router.delete('/:id', ensureLoggedIn, pickupsCtrl.deletePickup);

module.exports = router;
