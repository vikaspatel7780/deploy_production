const express = require('express')
const app=express();
require('dotenv').config();

app.get('/',(req,res)=>{
    res.send('Hello World');
})

app.get('/instragram',(req,res)=>{
    res.send('Welcome to Instagram');
})
app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})