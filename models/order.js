const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const orderSchema = new Schema({
//   distributor: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true
//   },
//   receiver: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//   },
//   foodItems: [{
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'Food',
//     required: true
//   }],
//   status: {
//     type: String,
//     enum: ['pending', 'claimed', 'delivered'],
//     default: 'pending'
//   },
//   message: {
//     type: String,
//     default: ''
//   },
//   createdAt: {
//     type: Date,
//     default: Date.now
//   }
// }, {
//   timestamps: true,
// });

const orderSchema = new Schema({
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

module.exports = mongoose.model('Order', orderSchema);
