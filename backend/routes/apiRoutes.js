const express = require('express');
const router = express.Router();
const authMiddleware = require('../middleware/authMiddleware');
const landController = require('../controllers/landController');
const userController = require('../controllers/userController');

// Land Routes
router.post('/register-land', authMiddleware, landController.registerLand);
router.get('/all-lands', authMiddleware, landController.getAllLands);
router.post('/transfer-land', authMiddleware, landController.transferLand);

// User Routes
router.post('/register', userController.registerUser);
router.post('/login', userController.loginUser);

module.exports = router;
