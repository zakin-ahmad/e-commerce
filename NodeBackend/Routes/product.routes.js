/* eslint-disable no-undef */
const router = require('express').Router();
const productController = require('../Controller/product.controller');
const imageUpload = require('../Middleware/multer');
const categoryController = require('../Controller/category.controller');
const userController = require('../Controller/user.controller');

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

// User routes
router.get('/user', userController.getAllUsers);
router.get('/user/add', userController.addUserPage);
router.post('/user/add', userController.addUser);
router.get('/user/update/:id', userController.updateUserPage);
router.put('/user/update/:id', userController.updateUser);
router.delete('/user/delete/:id', userController.deleteUser);

module.exports = router;