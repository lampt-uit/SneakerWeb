const Category = require('../models/categories.model');
const Products = require('../models/product.model');

const categoryController = {
	getCategories: async (req, res) => {
		try {
			const categories = await Category.find();
			res.json(categories);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},

	createCategory: async (req, res) => {
		try {
			//If user have role ==1 => Admin
			//Ony Admin can create, delete and update category
			const { name } = req.body;

			const category = await Category.findOne({ name });
			if (category) {
				return res.status(400).json({ msg: 'This category already exist.' });
			}

			const newCategory = new Category({ name });
			await newCategory.save();
			res.json({ msg: 'Create Category Success.' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	deleteCategory: async (req, res) => {
		try {
			const products = await Products.findOne({ category: req.params.id });
			if (products)
				return res.status(400).json({
					msg: 'Please delete all products with a relationship !'
				});
			await Category.findByIdAndDelete(req.params.id);
			res.json({ msg: 'Deleted a Category' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	updateCategory: async (req, res) => {
		try {
			const { name } = req.body;
			await Category.findByIdAndUpdate({ _id: req.params.id }, { name });
			res.json({ msg: 'Updated a Category' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	}
};

module.exports = categoryController;
