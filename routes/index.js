import express from 'express'
import userController from '../controllers/user'

const router = express.Router()
// Register a new User
router.post('/register', userController.register);

// Login
router.post('/login', userController.login);

module.exports = router;
