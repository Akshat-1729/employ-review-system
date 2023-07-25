const express=require('express');
const router=express.Router();
const adminController=require('../controllers/admin_controller');
router.get('/profile',adminController.home);
module.exports=router;