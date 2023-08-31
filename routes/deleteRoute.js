const express = require('express')
const deleteRouter = express.Router();
const deleteProduct = require('../controllers/updateController')
router.delete('/deleteProduct',(req,res)=>{
    deleteProduct()
})
module.exports = deleteRouter;