const Food = require('../../models/food');
const mongoose = require('mongoose');

module.exports = {
  create,
  index,
  getFood,
  delete: deleteFood
}

async function create(req, res) {
  try {
    // Add the food to the db
    console.log("THIS IS REQ.USER", req.user)
    console.log("food object", req.body)
    req.body.user = req.user._id
    console.log("AFTER", req.body)
    const food = await Food.create(req.body);
    res.json(food);
  } catch (err) {
    console.log("ERROR", err)
    res.status(400).json(err);
  }
}

async function getFood(req, res) {
  console.log("GET FOOD CALLED")
  console.log("REQ.BODY", req.params)
  const food = await Food.findById(req.params.id)
  console.log("FOOD", food)
  res.json(food)
}

async function index(req, res){
  // console.log('index almost called')
  const food = await Food.find({}).exec()
  // console.log(food, 'index fnc called')
  res.json(food);
}

  async function deleteFood(req, res) {
    req.body.user = req.user._id;
    console.log(req.params.id, ' this is the id');
    console.log(req.body, ' this is the body');
    if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
      return res.status(400).send('Invalid ID');
    }
    const food = await Food.findByIdAndDelete(req.params.id);
    res.json(food);
  }