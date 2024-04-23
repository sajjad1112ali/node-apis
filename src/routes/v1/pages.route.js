const express = require('express');
const userController = require('../../controllers/v2/user.controller');

const router = express.Router();

router.get('/reset-password', (req, res) => {
  res.sendFile('src/resources/pages/reset-password.html', { root: '.' });
});

router.post('/reset-password', userController.resetPassword);

module.exports = router;
