const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const requestSchema = new Schema({
  // pickup status
  status: {
    type: String,
    enum: ['pending', 'denied', 'accepted'],
    default: 'pending'
  },
  // to display the contact info of the hungry userType requesting pickup
  requester: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // to display the post itself and the hero userType contact info
  postInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
  },
})

module.exports = mongoose.model('Request', requestSchema);