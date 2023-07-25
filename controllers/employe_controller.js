const Employee=require('../model/employee');
module.exports.signup=async function(req,res){
    return res.render('sign_up',{
        title:'Sign|Up'
    })
}
module.exports.create=async function(req,res){
    try{
    if(req.body.password!=req.body.confirm_password){
        return res.redirect('back');
    }
    const employ=await Employee.findOne({email:req.body.email})
    if(!employ){
        Employee.create(req.body);
        return res.redirect('/')
    }
    else{
        return res.render('back');
    }
    }catch(err){
        console.log('Error in creating /fetching user during sign up',err);
    }
}