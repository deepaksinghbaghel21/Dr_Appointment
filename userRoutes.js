const express = require('express')
const { loginController, registerController, authController} = require('../controllers/userCtrl');
const authMiddleware = require ("../middlewares/authMiddleware");
//router object
const router = express.Router();

//routes
//LOGIN || POST
router.post('/Login', loginController);

//REGISTER ||POST
router.post('/Register', registerController);

//Home ||POST
router.post('/getUserData', authMiddleware, authController);
module.exports = router;