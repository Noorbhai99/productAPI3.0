const express = require('express')
const router = express.Router();
const createProduct = require('../controllers/productController')
router.post('/create',(req,res)=>{
    createProduct()
})
module.exports = router;