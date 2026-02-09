const mongoose = require('mongoose');
const slugify = require('slugify');

const categorySchema = new mongoose.Schema(
  {
    categoryName: {
      type: String,
      required: [true, "Category name is required"],
      unique: true,
      trim: true
    },

    slug: {
      type: String,
      trim: true,
      unique: true
    },

    iconName: {
      type: String,
      required: [true, "Icon name is required for the category slider"],
      trim: true
    },

    parentCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category',
      default: null
    },

    hasSubCategories: {
      type: Boolean,
      default: false
    },
  },
  { timestamps: true }
);

categorySchema.pre('findOneAndUpdate', async function() {
  const update = this.getUpdate();
  if (update.categoryName) {
    update.slug = await slugify(update.categoryName, { lower: true });
    this.setUpdate(update);
  }
});

const Category = mongoose.model('Category', categorySchema);
module.exports = Category;
