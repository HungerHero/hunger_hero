const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const foodSchema = new Schema({
    name: {type: String, enum: ["Canned Food", "Fresh Produce", "Shelf Stable", "Prepared Meals", "Mixed"], required: true},
    quantity: {type: String, required: true, default: "unknown"},
    description: {type: String, required: true},
    condition: {type: [String]},
    availableTime: {type: String},
    availableDate: {type: String},
    location: {type: String, required: true},
    photoUrl: {type: String, default:'./images/image2.png'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
}, {
  timestamps: true,
});

module.exports = mongoose.model('Food', foodSchema);