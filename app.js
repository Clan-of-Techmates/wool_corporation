const express = require('express')
const app = express();
const path = require('path')
const ejsMate = require('ejs-mate');


app.engine('ejs',ejsMate)
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))



app.get('/', async(req,res)=>{
    res.render('wool_grounds/home');

})
app.get('/about',async(req,res)=>{
    res.render('wool_grounds/about');

})
app.listen(3000,()=>{
    console.log("connected on port 3000");

})