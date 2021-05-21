const Users = require('../models/user.model');
const Payments = require('../models/payment.model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const sendMail = require('./sendEmail');
const { CLIENT_URL } = process.env;

const userController = {
	register: async (req, res) => {
		try {
			const { name, email, password } = req.body;

			const user = await Users.findOne({ email });
			if (user)
				return res.status(400).json({ msg: 'The email already exists.' });

			const hashPassword = await bcrypt.hash(password, 10);
			const newUser = new Users({
				email,
				password: hashPassword,
				name
			});

			await newUser.save();

			const accesstoken = createAccessToken({ id: newUser._id });
			const refreshtoken = createRefreshToken({ id: newUser._id });

			//res.cookie(name,value[,options])
			res.cookie('refreshtoken', refreshtoken, {
				httpOnly: true, //Only access by web server
				path: '/user/refresh_token',
				maxAge: 7 * 24 * 60 * 60 * 1000 //7day => ms
			});

			// res.json({ accesstoken });

			res.status(200).json({ message: 'Create user successfully !' });
		} catch (error) {
			return res.status(500).json({ msg: error.msg });
		}
	},
	login: async (req, res) => {
		try {
			const { email, password } = req.body;

			const user = await Users.findOne({ email });

			if (!user)
				return res.status(400).json({ message: "User doesn't exists." });

			const isMatch = await bcrypt.compare(password, user.password);
			if (!isMatch)
				return res.status(400).json({ message: 'Password is incorrect.' });

			const accesstoken = createAccessToken({ id: user._id });
			const refreshtoken = createRefreshToken({ id: user._id });

			//res.cookie(name,value[,options])
			res.cookie('refreshtoken', refreshtoken, {
				httpOnly: true, //Only access by web server
				path: '/user/refresh_token',
				maxAge: 7 * 24 * 60 * 60 * 1000 //7day => ms
			});

			res.status(200).json({ message: 'Login successfully !' });
		} catch (error) {
			return res.status(500).json({ msg: error.msg });
		}
	},
	logout: async (req, res) => {
		try {
			res.clearCookie('refreshtoken', { path: '/user/refresh_token' });
			return res.json({ message: 'Logged Out' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	refreshToken: (req, res) => {
		try {
			const rf_token = req.cookies?.refreshtoken;
			// console.log(rf_token);
			if (!rf_token)
				return res.status(400).json({ msg: 'Please Login or Register' });

			jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (error, user) => {
				if (error)
					return res.status(400).json({ message: 'Please Login or Register' });

				const accesstoken = createAccessToken({ id: user.id });
				res.json({ accesstoken });
			});
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	getUser: async (req, res) => {
		try {
			const user = await Users.findById(req.user.id).select('-password');
			if (!user) return res.status(400).json({ msg: 'User does not exist.' });
			res.json(user);
		} catch (error) {
			return res.status(500).json({ msg: error.msg });
		}
	},
	getAllUser: async (req, res) => {
		try {
			const user = await Users.find().select('-password ');
			res.json(user);
		} catch (error) {
			return res.status(500).json({ msg: error.msg });
		}
	},
	addCart: async (req, res) => {
		try {
			const user = await Users.findById(req.user.id);

			if (!user)
				return res.status(400).json({ msg: "User doesn't not exists " });

			// console.log(req.body.cart);

			await Users.findOneAndUpdate(
				{ _id: req.user.id },
				{
					cart: req.body.cart
				}
			);

			return res.json({ msg: 'Added to cart' });
		} catch (error) {
			return res.status(500).json({ msg: error.msg });
		}
	},
	history: async (req, res) => {
		try {
			const history = await Payments.find({ user_id: req.user.id });
			res.json(history);
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	updateUserInfo: async (req, res) => {
		try {
			const { name, phone, address } = req.body;
			await Users.findByIdAndUpdate(
				{
					_id: req.user.id
				},
				{
					name,
					phone,
					address
				}
			);

			res.json({ message: 'Information is updated successful' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	},
	changePassword: async (req, res) => {
		try {
			const { password, new_password } = req.body;

			const user = await Users.findById(req.user.id);
			if (!user) {
				return res.status(400).json({ message: "User doesn't exists." });
			}

			const isMatch = await bcrypt.compare(password, user.password);

			if (!isMatch)
				return res.status(400).json({ message: 'Password is incorrect.' });

			const hashPassword = await bcrypt.hash(new_password, 10);

			await Users.findByIdAndUpdate(
				{
					_id: req.user.id
				},
				{
					password: hashPassword
				}
			);

			res.json({ message: 'Password is updated successful' });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	forgotPassword: async (req, res) => {
		try {
			const { email } = req.body;
			const user = await Users.findOne({ email });
			if (!user)
				return res.status(400).json({ message: 'This email does not exist.' });
			const access_token = createAccessToken({ id: user._id });

			const url = `${CLIENT_URL}/reset/${access_token}`;
			sendMail(email, url, 'Reset your password');
			res.json({ message: 'Re-send the password, please check your email.' });
		} catch (error) {
			return res.status(500).json({ message: error.message });
		}
	},
	resetPassword: async (req, res) => {
		try {
			const { password } = req.body;
			const passwordHash = await bcrypt.hash(password, 12);
			await Users.findOneAndUpdate(
				{ _id: req.user.id },
				{
					password: passwordHash
				}
			);
			res.json({ message: 'Password successfully changed' });
		} catch (error) {
			return res.status(500).json({ msg: error.message });
		}
	}
};

const createAccessToken = (user) => {
	return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '7m' });
};

const createRefreshToken = (user) => {
	return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '7d' });
};

module.exports = userController;
