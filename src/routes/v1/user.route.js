const express = require('express');
const validate = require('../../middlewares/validate');
const { userValidation } = require('../../validations');
const userController = require('../../controllers/v2/user.controller');
const auth = require('../../middlewares/auth');

const router = express.Router();

router.post('/register', validate(userValidation.register), userController.register);
router.post('/', validate(userValidation.login), userController.login);
router.get('/', auth(), userController.getProfile);
router.post('/forgot-password', validate(userValidation.forgotPassword), userController.forgotPassword);
module.exports = router;
