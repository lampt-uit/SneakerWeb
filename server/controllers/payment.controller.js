const Payments = require('../models/payment.model');
const Users = require('../models/user.model');
const Products = require('../models/product.model');

const paymentController = {
	getPayments: async (req, res) => {
		try {
			const payments = await Payments.find();
			res.json(payments);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	createPayment: async (req, res) => {
		try {
			const user = await Users.findById(req.body.id).select(
				'name address phone'
			);

			// console.log(user);
			// console.log(req.body);

			if (!user) {
				const { name, phone, address, cart, note } = req.body;
				const newPayment = new Payments({
					name,
					phone,
					address,
					cart,
					note
				});
				await newPayment.save();
				cart.filter((item) => {
					return sold(item._id, item.count, item.sold);
				});
			} else {
				const { id, name, phone, address, cart, note } = req.body;
				const newPayment = new Payments({
					user_id: id,
					name: name || user.name,
					phone: phone || user.phone,
					cart,
					address: address || user.address,
					note
				});
				await newPayment.save();
				cart.filter((item) => {
					return sold(item._id, item.count, item.sold);
				});
			}
			// res.json({ msg: 'Payment Successfully' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	}
};

const sold = async (id, count, oldSold) => {
	await Products.findOneAndUpdate(
		{ _id: id },
		{
			sold: count + oldSold
		}
	);
};

module.exports = paymentController;
