const mongoose = require('mongoose');

const productSchema = mongoose.Schema(
	{
		product_id: {
			type: String,
			unique: true,
			trim: true,
			required: true
		},
		title: {
			type: String,
			trim: true,
			required: true
		},
		price: {
			type: Number,
			trim: true,
			required: true
		},
		description: {
			type: String,
			required: true
		},
		image: {
			type: String,
			required: true
		},
		category: {
			type: String,
			required: true
		},
		sold: {
			type: Number,
			default: 0
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('Product', productSchema);
