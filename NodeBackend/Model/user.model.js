const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  // Account Information
  fullName: {
    type: String,
    required: [true, "Full name is required"],
    trim: true
  },
  emailOrPhone: {
    type: String,
    required: [true, "Email or phone number is required"],
    unique: true,
    lowercase: true
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: 6
  },

  // Profile Details for Account Page
  firstName: { type: String }, // Optional, can be derived from fullName
  lastName: { type: String },  // Optional, can be derived from fullName
  address: { type: String },
  
  // Wishlist Logic
  // Array of Product IDs to link to the Product Model
  wishlist: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product'
  }],

  // Role management for Admin Dashboard
  role: {
    type: String,
    enum: ['user', 'admin'],
    default: 'user'
  },

  // Timestamps for Account Age
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

const User = mongoose.model('User', userSchema);
module.exports = User;