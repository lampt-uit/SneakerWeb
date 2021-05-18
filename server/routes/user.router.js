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

module.exports = router;
