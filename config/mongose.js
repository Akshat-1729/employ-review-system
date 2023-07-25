const mongoose=require('mongoose');
mongoose.connect('mongodb://127.0.0.1/reviewerz');
const db=mongoose.connection;
db.on('error',console.error.bind('Error in connecting Database'));
db.once('open',()=>{
    console.log('connected to data base::MongoDB');
})
module.exports=db;