const mongoose=require('mongoose');
const employSchema=new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true
    },
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
},{
    timestamps:true
});
const Employee=mongoose.model('Employee',employSchema);
module.exports=Employee;