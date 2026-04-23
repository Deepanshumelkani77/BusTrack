const express=require('express')
const router=express.Router();
const{busInfo}=require('../controller/busController');

router.get('/',busInfo);

module.exports=router;