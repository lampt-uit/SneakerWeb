//Import package
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');

const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const app = express();

app.use('/uploads', express.static('uploads'));
app.use(express.json());
app.use(cookieParser());
app.use(cors());

const swaggerOptions = {
	swaggerDefinition: {
		openapi: '3.0.1',
		info: {
			title: 'Vatino Shop API',
			version: '1.0.0',
			description: 'Api for VatinoShop management',
			contact: {
				name: 'Pham Tan Lam',
				email: '18520972@2gm.uit.edu.vn'
			}
		},
		servers: [
			{
				url: 'http://localhost:4000'
			}
		]
	},
	apis: ['./routes/*.js']
};

const swaggerDocs = swaggerJSDoc(swaggerOptions);
app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerDocs));
app.use('/user', require('./routes/user.router'));
app.use('/api', require('./routes/product.router'));
app.use('/api', require('./routes/payment.router'));
app.use('/api', require('./routes/categories.router'));

const PORT = process.env.PORT || 5000;
const URL = process.env.MONGO_URL;

mongoose
	.connect(URL, {
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
		useUnifiedTopology: true
	})
	.then(() =>
		app.listen(PORT, () => {
			console.log(`Server is running on PORT: ${PORT}`);
		})
	)
	.catch((error) => {
		console.log(error.message);
	});
