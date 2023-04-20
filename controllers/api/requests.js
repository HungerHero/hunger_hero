const Request = require('../../models/request');
const User = require('../../models/user');

module.exports = {
  create,
  index,
  getRequest,
  getRequesterUser,
  // getUsersRequests,
}

async function create(req, res) {
  try {
    // console.log("THIS IS REQ.USER", req.user)
    // console.log("food object", req.body)
    req.body.user = req.user._id
    // console.log("AFTER", req.body)
    const request = await Request.create(req.body);
    res.json(request);
  } catch (err) {
    console.log("ERROR", err)
    res.status(400).json(err);
  }
}

async function getRequest(req, res) {
  console.log("GET REQUEST CALLED")
  console.log("REQ.BODY", req.params)
  const request = await Request.findById(req.params.id)
  console.log("REQUEST", request)
  res.json(request)
}

async function getRequesterUser(req, res) {
    console.log( 'ctrl reqbody --> ', req.body)
    const users = await User.find({ _id: { $in: req.body} });
    res.json(users)
    console.log(users)
}

async function index(req, res){
    const request = await Request.find({}).exec()
    console.log(request, 'request index fnc called')
    res.json(request);
  }

// async function getUsersRequests(req, res) {
//   const usersRequests = await Request.find({requester: req.body.user})
//   console.log(usersRequests, 'usersRequests')
//   res.json(usersRequests)
// }