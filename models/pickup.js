const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pickupSchema = new Schema({
  // pickup status
  status: {
    type: String,
    enum: ['pending', 'denied', 'accepted'],
    default: 'pending'
  },
  distributor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // to display the contact info of the hungry userType requesting pickup
  receiver: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  // to display the post itself and the hero userType contact info
  postInfo: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Food',
  },
})

pickupSchema.index( { requester: 1, postInfo: 1 }, { unique: true })

module.exports = mongoose.model('Pickup', pickupSchema);