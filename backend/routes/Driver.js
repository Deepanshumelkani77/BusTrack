const express = require("express");
const router = express.Router();
const {
  signupDriver,loginDriver
} = require('../controller/driverController');

router.post('/signup',signupDriver);
router.post('/login',loginDriver);



module.exports=router;