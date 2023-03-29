const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt');

const SALT_ROUNDS = 6;

const userSchema = new Schema({
  name: {type: String, required: true},
  email: {
    type: String,
    lowercase: true,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  userType: {type: String},
  businessName: {type: String},
  businessType: {type: String},
  photoUrl: {type: String},
  address: {type: String},
  city: {type: String},
  state: {type: String},
  zipCode: {type: String},
  phoneNumber: {type: String},
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Order'
  }],
}, {
  timestamps: true,
  toJSON: {
    transform: function(doc, ret) {
      delete ret.password;
      return ret;
    }
  }
});

userSchema.pre('save', async function(next) {
  // 'this' is the user document
  if (!this.isModified('password')) return next();
  // Replace the password with the computed hash
  this.password = await bcrypt.hash(this.password, SALT_ROUNDS);
});

module.exports = mongoose.model('User', userSchema);