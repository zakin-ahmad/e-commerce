const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  // Basic Info
  productName: { 
    type: String, 
    required: true, 
    trim: true 
  },
  productDescription: { 
    type: String, 
    required: true 
  },
  
  // Pricing & Discounts
  currentPrice: { 
    type: Number, 
    required: true 
  },
  oldPrice: { 
    type: Number 
  }, // Used to calculate the discount badge percentage
  discount: { 
    type: Number, 
    default: 0 
  }, // Explicit percentage (e.g., 40 for -40%)

  // Categorization
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true
  },

  // Media
  image: { 
    type: String, 
    required: true 
  }, // Primary image for cards
  images: [String], // Gallery for the product detail page

  // Inventory & Variants
  stock: { 
    type: Number, 
    required: true, 
    default: 0 
  },
  colors: [String], // Hex codes (e.g., ["#FB1314", "#DB4444"])
  sizes: {
    type: [String],
    enum: ['XS', 'S', 'M', 'L', 'XL'],
  },

  // Social Proof
  rating: { 
    type: Number, 
    default: 0,
    min: 0,
    max: 5
  },
  reviews: { 
    type: Number, 
    default: 0 
  },

  // Metadata for filtering
  isBestSeller: { 
    type: Boolean, 
    default: false 
  },
  isNewArrival: { 
    type: Boolean, 
    default: false 
  }
}, { timestamps: true });

const Product = mongoose.model('Product', productSchema);
module.exports = Product;