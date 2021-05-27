const express = require('express');
const router = express.Router();

const categoryController = require('../controllers/categories.controller');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');

router
	.route('/category')
	.get(categoryController.getCategories)
	.post(auth, authAdmin, categoryController.createCategory);
router
	.route('/category/:id')
	.delete(auth, authAdmin, categoryController.deleteCategory)
	.put(auth, authAdmin, categoryController.updateCategory);

module.exports = router;

/**
 * @swagger
 * tags:
 *  name: Category
 * paths:
 *  /api/category:
 *   get:
 *    tags: [Category]
 *    summary: Get List Category
 *    responses:
 *     200:
 *      description: Return List Category
 *   post:
 *    tags: [Category]
 *    summary: Add new category
 *    description: This can only be done by the logged in admin
 *    parameters:
 *    - name: name
 *      description: Category's name
 *      required: true
 *    responses:
 *     200:
 *      description: Create category successful
 *     400:
 *      description: This category already exist
 *
 *  /api/category/{categoryID}:
 *   delete:
 *    tags: [Category]
 *    summary: Delete a category
 *    description: This can only be done by the logged in admin
 *    parameters:
 *    - name: categoryID
 *      in: path
 *      description: Category ID to delete
 *      required: true
 *      type: 'string'
 *      example: 507f1f77bcf86cd799439011
 *   put:
 *    tags: [Category]
 *    summary: ID of category that needs to be updated
 *    description: This can only be done by the logged in admin
 *    parameters:
 *    - name: categoryID
 *      in: path
 *      description: Category ID to update
 *      required: true
 *      type: string
 *      example: 507f1f77bcf86cd799439011
 *    - name: name
 *      in: formData
 *      description: Category's name to update
 *      required: true
 *      type: string
 *      example: Bitis
 *    responses:
 *     200:
 *      description: Updated a category
 *     400:
 *      description: This category is already exist.
 */
