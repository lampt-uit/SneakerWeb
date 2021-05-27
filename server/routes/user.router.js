const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const auth = require('../middlewares/auth');
const authAdmin = require('../middlewares/authAdmin');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/logout', userController.logout);
router.get('/refresh_token', userController.refreshToken);
router.get('/info', auth, userController.getUser);
router.get('/all', auth, authAdmin, userController.getAllUser);
router.patch('/addcart', auth, userController.addCart);
router.get('/history', auth, userController.history);
router.patch('/updateUserInfo', auth, userController.updateUserInfo);
router.patch('/changePassword', auth, userController.changePassword);
router.post('/forgotPassword', userController.forgotPassword);
router.post('/resetPassword', auth, userController.resetPassword);
router.delete('/delete/:id', auth, authAdmin, userController.deleteUser);
router.patch('/updateRole/:id', auth, authAdmin, userController.updateRole);
router.post('/create', auth, authAdmin, userController.createUser);
router.patch('/updateUser/:id', auth, authAdmin, userController.updateUser);
router.post('/google_login', userController.googleLogin);
router.post('/facebook_login', userController.facebookLogin);
router.post('/email_subscribe', userController.receiveEmail);

module.exports = router;

/**
 * @swagger
 * tags:
 *  name: User
 * paths:
 *  /user/register:
 *   post:
 *    tags: [User]
 *    summary: User registers an account
 *    parameters:
 *    - name: name
 *      description: User name
 *      required: true
 *      example: Tan Lam
 *      in : body
 *    - name: email
 *      description: User's email
 *      required: true
 *      example: tanlam@gmail.com
 *      in: body
 *    - name: password
 *      description: User's password
 *      required: true
 *      example: '**********'
 *      in: body
 *    responses:
 *     200:
 *      description: Create user successfully
 *     400:
 *      description: The email already exist
 *  /user/login:
 *   post:
 *    tags: [User]
 *    summary: Logs user into the system
 *    parameters:
 *    - name: email
 *      required: true
 *      in: body
 *      example: tanlam@gmail.com
 *      description: The email for login
 *    - name: password
 *      required: true
 *      in: body
 *      description: The password for login in clear text
 *      example: '**********'
 *    responses:
 *     200:
 *      description: Login successfully
 *     400:
 *      description: User doesn't exist or Password is incorrect
 *  /user/logout:
 *   get:
 *    tags: [User]
 *    summary: Logs out current logged in user session
 *    responses:
 *     200:
 *      description: Logged out
 *  /user/refresh_token:
 *    get:
 *     tags: [User]
 *     description: This can only be done by the logged in user
 *     summary: Refresh TOKEN
 *     responses:
 *      400:
 *       description: Please login or register
 *      200:
 *       description: Return Token
 *  /user/info/{userID}:
 *    get:
 *     tags: [User]
 *     summary: Find user info by ID
 *     description: This can only be done by the logged in user
 *     parameters:
 *     - name: User ID
 *       required: true
 *       description: ID of user that needs to be fetched
 *       example: 507f1f77bcf86cd799439011
 *       in: path
 *     responses:
 *      200:
 *       description: Return user
 *      400:
 *       description: User does not exist.
 *  /user/all:
 *    get:
 *     tags: [User]
 *     summary: Get list user
 *     description: This can only be done by the logged in admin
 *     responses:
 *      200:
 *       description: Return list user
 *      400:
 *       description: Access be dined.
 *  /user/addcart/{userID}:
 *    patch:
 *     tags: [User]
 *     summary: Add product to cart
 *     description: This can only be done by the logged in user
 *     parameters:
 *     - name: cart
 *       required: true
 *       in: body
 *       description: Product is added to cart
 *       type: object
 *     - name: User ID
 *       required: true
 *       example: 507f1f77bcf86cd799439011
 *       in: path
 *       description: ID of User that needs to add product
 *     responses:
 *      200:
 *       description: Added to cart
 *      400:
 *       description: User does not exist.
 *  /user/history/{userID}:
 *    get:
 *     tags: [User]
 *     summary: Find payments info by user ID
 *     description: This can only be done by the logged in user
 *     parameters:
 *     - name: User ID
 *       required: true
 *       example: 507f1f77bcf86cd799439011
 *       in: path
 *       description: ID of User that needs to be fetched
 *  /user/updateUserInfo:
 *    patch:
 *     tags: [User]
 *     summary: Update user information
 *     description: This can only be done by the logged in user
 *     parameters:
 *     - name: User ID
 *       required: true
 *       example: 507f1f77bcf86cd799439011
 *       in: path
 *     - name: name
 *       description: User name
 *       required: true
 *       example: Tan Lam
 *       type: string
 *       in: body
 *     - name: phone
 *       description: Phone number
 *       required: true
 *       in: body
 *       example: 09311412421
 *       type: number
 *     - name: address
 *       description: Customer address
 *       in: body
 *       example: Quang Nam
 *       required: true
 *       type: string
 *     responses:
 *      200:
 *       description: Information is updated successfully
 *      400:
 *       description: Please fill on all fields
 *  /user/changePassword:
 *    patch:
 *     tags: [User]
 *     summary: Change current password
 *     description: This can only be done by the logged in user
 *     parameters:
 *     - name: password
 *       required: true
 *       type: string
 *       example: '*********'
 *       description: Current password
 *       in: body
 *     - name: new_password
 *       required: true
 *       type: string
 *       description: New password
 *       example: '*********'
 *       in: body
 *     responses:
 *      200:
 *       description: Password is updated successfully
 *      400:
 *       description: Password is incorrect
 *  /user/forgotPassword:
 *    patch:
 *     tags: [User]
 *     summary: User forgot password
 *     parameters:
 *     - name: email
 *       description: Email registered account
 *       required: true
 *       type: string
 *       example: tanlam@gmail.com
 *       in: body
 *     responses:
 *      200:
 *       description: Re-send the password, please check your email
 *      400:
 *       description: This email does not exist
 *  /user/resetPassword:
 *    post:
 *     tags: [User]
 *     summary: User recover password
 *     description: This can only be done by the receive email recover password
 *     parameters:
 *     - name: token ID
 *       description: Token in email be sent by system
 *       required: true
 *       type: string
 *       in: path
 *     - name: password
 *       type: string
 *       description: New password
 *       example: '***********'
 *       required: true
 *       in: body
 *     responses:
 *      200:
 *       description: Password successfully changed
 *      400:
 *       description: Token invalid
 *  /user/delete/{userID}:
 *    delete:
 *     tags: [User]
 *     summary: Admin delete user
 *     description: This can only be done by the logged in admin
 *     parameters:
 *     - name: User ID
 *       in: path
 *       example: 507f1f77bcf86cd799439011
 *       description: User code will be deleted
 *       required: true
 *       type: string
 *     responses:
 *      200:
 *       description: User is deleted successfully
 *  /user/updateRole/{userID}:
 *    patch:
 *     tags: [User]
 *     summary: Update user permission
 *     description: This can only be done by the logged in admin
 *     parameters:
 *     - name: User ID
 *       description: User code will be updated
 *       required: true
 *       example: 507f1f77bcf86cd799439011
 *       type: string
 *       in: path
 *     - name: role
 *       description: 1 Admin 0 User
 *       default: 1
 *       in: body
 *       required: true
 *       type: number
 *     responses:
 *      200:
 *       description: Role of user is updated successfully
 *  /user/updateUser/{userID}:
 *    patch:
 *     tags: [User]
 *     summary: Update user information by user
 *     description: This can only be done by the logged in user
 *     parameters:
 *     - name: name
 *       description: User name
 *       required: true
 *       example: Tan Lam
 *       type: string
 *       in: body
 *     - name: phone
 *       description: Phone number
 *       required: true
 *       in: body
 *       example: 09311412421
 *       type: number
 *     - name: address
 *       description: Customer address
 *       in: body
 *       example: Quang Nam
 *       required: true
 *       type: string
 *     - name: email
 *       description: Customer email
 *       in: body
 *       required: true
 *       type: string
 *       example: tanlam@gmail.com
 *     responses:
 *      200:
 *       description: Information is updated successfully
 *  /user/google_login:
 *    post:
 *     tags: [User]
 *     summary: Login with google account
 *     parameters:
 *     - name: tokenId
 *       description: TokenId of the google account you want to sign in
 *       required: true
 *       in: body
 *     responses:
 *      200:
 *       description: Log in successfully
 *  /user/facebook_login:
 *    post:
 *     tags: [User]
 *     summary: Login with facebook account
 *     parameters:
 *     - name: accessToken
 *       in: body
 *       description: accessToken of the google account you want to sign in
 *       required: true
 *     - name: userID
 *       description: userID of the google account you want to sign in
 *       required: true
 *       in: body
 *     responses:
 *      200:
 *       description: Login successfully
 *  /user/email_subscribe:
 *    post:
 *     tags: [User]
 *     summary: Sign up for email to receive the latest promotions
 *     parameters:
 *     - name: email
 *       in: body
 *       required: true
 *       description: Email which you want to register
 *       example: tanlam@gmauil.com
 *     responses:
 *      200:
 *       description: Subscribe successfully
 *      400:
 *       description: Email have been subscribe
 *
 */
