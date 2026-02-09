const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  // We store product details directly in case the product price changes later
  items: [{
    product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
    name: String,
    price: Number,
    quantity: Number
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  // Billing Details from the Checkout Page
  billingDetails: {
    firstName: { type: String, required: true },
    streetAddress: { type: String, required: true },
    apartment: { type: String },
    townCity: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    email: { type: String, required: true }
  },
  paymentMethod: {
    type: String,
    enum: ['Bank', 'Cash on delivery'],
    required: true
  },
  status: {
    type: String,
    enum: ['Pending', 'Processing', 'Shipped', 'Delivered', 'Cancelled'],
    default: 'Pending'
  }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);