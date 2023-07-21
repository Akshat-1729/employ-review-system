const express=require('express');
const app=express();
const port=8000;
app.use('/',require('./routes'));
app.listen(port,function(err){
    if(err){
        console.log(`Error in starting server ${err}`);
    }
    console.log(`Server is up and running on port no:${port}`);
})