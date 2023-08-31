const express = require('express')
const updateRouter = express.Router();
const updateProduct = require('../controllers/updateController')
router.put('/updateProduct',(req,res)=>{
    updateProduct()
})
module.exports = updateRouter;