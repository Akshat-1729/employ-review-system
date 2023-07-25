const express=require('express');
const cookieParser=require('cookie-parser');
const app=express();
const port=8000;
const expressLayouts=require('express-ejs-layouts');
const db=require('./config/mongose');
app.use(express.urlencoded());
app.use(cookieParser());
app.use(express.static('./assets'));
app.use(expressLayouts)
app.use('/',require('./routes'));
//setup view engine
app.set('view engine','ejs');
app.set('views','./view');
app.listen(port,function(err){
    if(err){
        console.log(`Error in starting server ${err}`);
    }
    console.log(`Server is up and running on port no:${port}`);
})