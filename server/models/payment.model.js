const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
	user_id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true
	},
	phone: {
		type: Number,
		required: true
	},
	address: {
		type: String,
		required: true
	},
	cart: {
		type: Array,
		default: []
	},
	status: {
		type: Boolean,
		default: false
	}
});

module.exports = mongoose.model('Payment', paymentSchema);
