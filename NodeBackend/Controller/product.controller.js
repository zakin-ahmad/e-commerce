/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const productModel = require("../Model/product.model");
const Category = require("../Model/category.model");
const mongoose = require("mongoose");
const fs = require("fs")
const path = require("path")

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel
      .find()
      .populate("category", "categoryName");

    if (!products) {
      return res.status(401).json({ message: "Product not found!" });
    }

    res.status(200).json(products);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch products" });
  }
};



const addProductPage = async (req, res) => {
  try {
    const categories = await productModel.distinct("category");
    res.render("addProduct", { categories });
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch categories" });
  }
};

const addProduct = async (req, res) => {
  try {
    const {
      productName,
      productDescription,
      currentPrice,
      oldPrice,
      discount,
      category,
      stock,
      colors,
      sizes,
      rating,
      reviews,
      isBestSeller,
      isNewArrival
    } = req.body;

    // Correct way to access uploaded files
    const mainImage = req.files?.image?.[0]?.filename;
    const galleryImages = req.files?.images?.map(file => file.filename) || [];
    console.log(mainImage, galleryImages)

    if (!mainImage) {
      return res.status(400).json({ error: "Main image is required" });
    }

    const product = new productModel({
      productName,
      productDescription,
      currentPrice: Number(currentPrice),
      oldPrice: Number(oldPrice),
      discount: Number(discount),
      category,
      image: mainImage,          // single image
      images: galleryImages,     // array of images
      stock: Number(stock),
      colors: JSON.parse(colors || '[]'),
      sizes: JSON.parse(sizes || '[]'),
      rating: Number(rating) || 0,
      reviews: Number(reviews) || 0,
      isBestSeller,
      isNewArrival
    });

    await product.save();
    res.status(201).json({ message: "Product added successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to add product" });
  }
};


const updateProductPage = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const product = await productModel.findById(productId);
    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    const categories = await productModel.distinct("category");
    res.render("updateProduct", { product, categories });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch product" });
  }
}

const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    const product = await productModel.findById(productId);

    const {
      productName,
      productDescription,
      currentPrice,
      oldPrice,
      discount,
      category,
      stock,
      colors,
      sizes,
      rating,
      reviews,
      isBestSeller,
      isNewArrival
    } = req.body;

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    /* ---------- Update text/number fields ---------- */
    if (productName) product.productName = productName;
    if (productDescription) product.productDescription = productDescription;
    if (currentPrice) product.currentPrice = Number(currentPrice);
    if (oldPrice) product.oldPrice = Number(oldPrice);
    if (discount) product.discount = Number(discount);
    if (category) product.category = category;
    if (stock) product.stock = Number(stock);

    if (colors) product.colors = JSON.parse(colors);
    if (sizes) product.sizes = JSON.parse(sizes);

    if (rating !== undefined) product.rating = Number(rating);
    if (reviews !== undefined) product.reviews = Number(reviews);

    if (isBestSeller !== undefined)
      product.isBestSeller = isBestSeller;

    if (isNewArrival !== undefined)
      product.isNewArrival = isNewArrival;

    // console.log(req.files)
    // 2 Delete main image
    /* ---------- Update main image ---------- */
    if (req.files?.image?.length) {
      // delete old image
      if (product.image) {
        const oldImagePath = path.join(
          __dirname,
          "..",
          "public",
          "images",
          product.image
        );
        fs.unlink(oldImagePath, () => {});
      }

      product.image = req.files.image[0].filename;
    }

    /* ---------- Update gallery images ---------- */
    if (req.files?.images?.length) {
      // delete old gallery images
      if (product.images?.length) {
        product.images.forEach((img) => {
          const imgPath = path.join(
            __dirname,
            "..",
            "public",
            "images",
            img
          );
          fs.unlink(imgPath, () => {});
        });
      }

      product.images = req.files.images.map(file => file.filename);
    }


    // console.log(product.images)

    await product.save()

    res.status(200).json({ message: "Product updated successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to update product" });
  }
}


const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;

    if (!productId) {
      return res.status(400).json({ error: "Product ID is required" });
    }

    // 1 Find product
    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({ error: "Product not found" });
    }

    // 2 Delete main image
    if (product.image) {
      const imagePath = path.join(__dirname, "..", "public", "images", product.image);

      fs.unlink(imagePath, (err) => {
        if (err) console.error("Main image delete error:", err.message);
      });
    }

    // 3 Delete multiple images (FIXED)
    if (product.images && product.images.length > 0) {
      product.images.forEach((img) => {
        const imgPath = path.join(__dirname, "..", "public", "images", img);

        fs.unlink(imgPath, (err) => {
          if (err) console.error("Extra image delete error:", err.message);
        });
      });
    }

    // 4 Delete product from DB
    await productModel.findByIdAndDelete(productId);

    res.status(200).json({ message: "Product deleted successfully" });

  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to delete product" });
  }
};

module.exports = { getAllProducts, addProductPage, addProduct, updateProductPage, updateProduct, deleteProduct };
