const Pickup = require('../../models/pickup');
const User = require('../../models/user');

module.exports = {
  createPickup,
  getReceiverPickups,
  getDistributorPickups,
  getPickup,
  updatePickup,
  // delete: deletePickup,
}

async function createPickup(req, res) {
  try {
    console.log("PickupCtrl, create, req.user ->", req.user)
    // console.log("food object", req.body)
    req.body.receiver = req.user._id
    console.log("AFTER", req.body)
    const request = await Pickup.create(req.body);
    res.json(request);
  } catch (err) {
    console.log("ERROR", err)
    res.status(400).json(err);
  }
}

async function getReceiverPickups(req, res) {
  try {
    const pickups = await Pickup.find({ receiver: req.params.id })
    .populate({
      path: 'postInfo',
      populate: {
        path: 'user'
      }
    })
    res.json(pickups);
  } catch (err) {
    console.log("There was an error -> ", err)
    res.status(400).json({ message: err.message });
  }
};

async function getDistributorPickups(req, res) {
  try {
    const pickups = await Pickup.find({ 'postInfo.user._id': req.params.id })
      .populate('receiver')
      .populate('postInfo');
    res.json(pickups);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

async function getPickup(req, res) {
  try {
    const pickup = await Pickup.findById(req.params.id)
      .populate('receiver')
      .populate('postInfo')
      .populate('postInfo.user');
    res.json(pickup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function updatePickup(req, res) {
  try {
    const pickup = await Pickup.findById(req.params.id);
    if (!pickup.user.equals(req.user._id)) return res.status(401).json({ msg: 'Not Authorized' });
    Object.assign(pickup, req.body);
    await pickup.save();
    res.json(pickup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}

async function deletePickup(req, res) {
  try {
    const pickup = await Pickup.findById(req.params.id);
    if (!pickup.user.equals(req.user._id)) return res.status(401).json({ msg: 'Not Authorized' });
    await pickup.remove();
    res.json(pickup);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
}