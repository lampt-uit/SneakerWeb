const express = require('express');
const router = express.Router();
const multer = require('multer');

const fileFilter = (req, file, cb) => {
	if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
		cb(null, true);
	} else {
		cb(null, false);
	}
};

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, '.\\uploads\\');
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + '-' + file.originalname);
	}
});
const upload = multer({
	storage,
	limits: {
		fileSize: 1024 * 1024 * 5
	},
	fileFilter
});

const productController = require('../controllers/product.controller');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');

router.route('/products').get(productController.getProducts).post(
	// auth,
	// authAdmin,
	upload.array('image'),
	productController.createProduct
);
router
	.route('/product/:id')
	.get(productController.getProduct)
	.delete(productController.deleteProduct)
	.patch(upload.array('image'), productController.updateProduct);

module.exports = router;

/**
 * @swagger
 * tags:
 *  name: Product
 * paths:
 *  /api/products:
 *   get:
 *    tags: [Product]
 *    summary: Get list product
 *    parameters:
 *    - name: limit
 *      in: query
 *      required: false
 *      example: 1
 *      type: number
 *    - name: page
 *      in: query
 *      required: false
 *      example: 1
 *      type: number
 *    - name: category
 *      in: query
 *      required: false
 *      example: 507f1f77bcf86cd799439011
 *      type: string
 *    - name: sort
 *      in: query
 *      required: false
 *      example: title=-title
 *      type: string
 *    - name: search
 *      in: query
 *      required: false
 *      example: sneaker
 *      type: string
 *    responses:
 *     200:
 *      description: Return list product
 *   post:
 *    tags: [Product]
 *    summary: Create a New Product
 *    description: This can only be done by the logged in admin
 *    parameters:
 *    - name: product_id
 *      in: formData
 *      required: true
 *      example: 45
 *    - name: title
 *      in: formData
 *      required: true
 *      example: Vans High
 *    - name: price
 *      in: formData
 *      required: true
 *      example: 45
 *    - name: description
 *      in: formData
 *      required: true
 *      example: Lorem is the lodash...
 *    - name: image
 *      in: formData
 *      type: file
 *      required: true
 *    - name: category
 *      in: formData
 *      required: true
 *      example: 507f1f77bcf86cd799439011
 *    - name: stock
 *      in: formData
 *      required: true
 *      example: 54
 *    responses:
 *     400:
 *      description: This product already exist.
 *     200:
 *      description: Create a new product successfully.
 *
 *  /api/product/{productID}:
 *   get:
 *    tags: [Product]
 *    summary: Find product by ID
 *    parameters:
 *    - name: Product ID
 *      required: true
 *      example: 507f1f77bcf86cd799439011
 *      in: path
 *      description: ID of product that needs to be fetched
 *    responses:
 *     200:
 *      description: Return a product
 *
 *   delete:
 *    tags: [Product]
 *    summary: Delete product by ID
 *    description: This can only be done by the logged in admin
 *    parameters:
 *    - name: Product ID
 *      required: true
 *      example: 507f1f77bcf86cd799439011
 *      in: path
 *      description: ID of product that needs to be deleted
 *    responses:
 *     200:
 *      description: Deleted a product
 *   patch:
 *    tags: [Product]
 *    summary: Update product by ID
 *    description: This can only be done by the logged in admin
 *    parameters:
 *    - name: title
 *      in: formData
 *      required: true
 *      example: Vans High
 *    - name: price
 *      in: formData
 *      required: true
 *      example: 45
 *    - name: description
 *      in: formData
 *      required: true
 *      example: Lorem is the lodash...
 *    - name: image
 *      in: formData
 *      type: file
 *      required: true
 *    - name: category
 *      in: formData
 *      required: true
 *      example: 507f1f77bcf86cd799439011
 *    - name: stock
 *      in: formData
 *      required: true
 *      example: 54
 *    responses:
 *     400:
 *      description: Please upload file image for product
 *     200:
 *      description: Product is update successfully
 */
