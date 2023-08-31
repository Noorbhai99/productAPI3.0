const express = require('express')
const dynamicRouter = express.Router();
const dynamicProduct = require('../controllers/dynamicProductController')
router.post('/dynamicCreate',(req,res)=>{
    
    dynamicProduct({name,price,description}=req.body)
})
module.exports = dynamicRouter;