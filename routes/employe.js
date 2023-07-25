const express=require('express');
const router=express.Router();
const employController=require('../controllers/employe_controller');
router.get('/signup',employController.signup);
router.post('/create',employController.create);

module.exports=router;