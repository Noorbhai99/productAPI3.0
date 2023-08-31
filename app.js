const express = require('express')
const app = express();
const PORT = 3000;
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')


app.get('/',(req,res)=>{
    res.json("hello world")
});
app.use('/product',productRoutes)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})