const express = require('express')
const app = express();
const path = require('path')

app.get('/',(req,res)=>{
    res.send('<h1>Welcome</h1>');

})
app.listen(3000,()=>{
    console.log("connected on port 3000");

})