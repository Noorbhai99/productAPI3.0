const express = require('express')
const app = express();
const PORT = 3000;
const mongoose = require('mongoose')
const productRoutes = require('./routes/productRoutes')
const updateRoutes = require('./routes/updateRoutes')
const getDetailsRoutes = require('./routes/getDetailsRoutes')
const deleteRoutes = require('./routes/deleteRoutes')
const dynamicRoutes = require('./routes/dynamicRoutes')

app.get('/',(req,res)=>{
    res.json("hello world")
});
app.use('/updateProduct',updateRoutes)
app.use('/getProductDetails',getDetailsRoutes)
app.use('/deleteProduct',deleteRoutes)
app.use('/product',productRoutes)
app.use('/dynamicProduct',dynamicRoutes)
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})