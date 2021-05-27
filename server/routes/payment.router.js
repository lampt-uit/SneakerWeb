const express = require('express');
const router = express.Router();
const paymentController = require('../controllers/payment.controller');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');

router
	.route('/payments')
	.get(auth, authAdmin, paymentController.getPayments)
	.post(paymentController.createPayment);

router
	.route('/payment/:id')
	.patch(auth, authAdmin, paymentController.updateStatus)
	.delete(auth, authAdmin, paymentController.deletePayment);

module.exports = router;

/**
 * @swagger
 * tags:
 *  name: Payment
 * paths:
 *  /api/payments:
 *   get:
 *    tags: [Payment]
 *    summary: Return list payments
 *    responses:
 *     200:
 *      description: List payments
 *   post:
 *    tags: [Payment]
 *    summary: Create a new payment
 *    parameters:
 *    - name: name
 *      in: formData
 *      type: string
 *      required: true
 *      example: Tan Lam
 *      description: Customer's name
 *    - name: address
 *      in: formData
 *      type: string
 *      required: true
 *      example: TPHCM
 *      description: Customer's address
 *    - name: phone
 *      in: formData
 *      type: number
 *      required: true
 *      example: 0948531413
 *      description: Customer's phone
 *    responses:
 *     200:
 *      description: Created payment
 *
 *  /api/payment/{paymentID}:
 *   patch:
 *    tags: [Payment]
 *    summary: Update status payment
 *    description: This can only be done by the logged in admin
 *    parameters:
 *    - name: Payment ID
 *      in:  path
 *      required: true
 *      example: 507f1f77bcf86cd799439011
 *      type: string
 *    - name: status
 *      in: body
 *      required: true
 *      default: 1
 *      type: number
 *    responses:
 *     200:
 *      description: Status payments is updated successful
 *   delete:
 *    tags: [Payment]
 *    summary: Delete a payment
 *    description: This can only be done by the logged in admin
 *    parameters:
 *    - name: Payment ID
 *      in: path
 *      required: true
 *      example: 507f1f77bcf86cd799439011
 *      type: string
 *    responses:
 *     200:
 *      description: Payment has been deleted successfully.
 */
