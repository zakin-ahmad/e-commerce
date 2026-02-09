/* eslint-disable no-undef */
const Category = require("../Model/category.model");


const getAllCategory = async (req, res) => {
    try {
        const categories = await Category.find();
        if (!categories) {
            return res.status(401).json({ message: "Category not found!" });
        }
        res.status(200).json(categories);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addCategoryPage = async (req, res) => {
    try {
        res.render("addCategory");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const addCategory = async (req, res) => {
    try {
        console.log(req.body);
        const { categoryName, iconName, parentCategory } = req.body;

        if (!categoryName || !iconName) {
            return res.status(400).json({
                error: "categoryName and iconName are required"
            });
        }

        const category = new Category({
            categoryName,
            iconName,
            parentCategory: parentCategory || null
        });

        await category.save();

        res.status(201).json({ message: "Category created successfully" });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: error.message });
    }
};


const updateCategoryPage = async (req, res) => {
    try {
        const category = await Category.findById(req.params.id);
        res.render("updateCategory", { category });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


const updateCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) {
            return res.status(404).json({ message: "Category not found" });
        }
        res.status(200).json({ message: "Category deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};



module.exports = { getAllCategory, addCategoryPage, addCategory, updateCategoryPage, updateCategory, deleteCategory };