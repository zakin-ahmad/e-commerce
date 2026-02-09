/* eslint-disable no-undef */
const router = require('express').Router();
const productController = require('../Controller/product.controller');
const imageUpload = require('../Middleware/multer');
const categoryController = require('../Controller/category.controller');

// Product routes
router.get('/product', productController.getAllProducts);
router.get('/product/add', productController.addProductPage);
router.post('/product/add', imageUpload.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 5 }]), productController.addProduct);
router.get('/product/update/:id', productController.updateProductPage);
router.put('/product/update/:id', imageUpload.fields([{ name: 'image', maxCount: 1 }, { name: 'images', maxCount: 5 }]), productController.updateProduct);
router.delete('/product/delete/:id', productController.deleteProduct);

// Category routes
router.get('/category', categoryController.getAllCategory);
router.get('/category/add', categoryController.addCategoryPage);
router.post('/category/add', categoryController.addCategory);
router.get('/category/update/:id', categoryController.updateCategoryPage);
router.put('/category/update/:id', categoryController.updateCategory);
router.delete('/category/delete/:id', categoryController.deleteCategory);

module.exports = router;