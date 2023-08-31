const express = require('express')
const getDetailsRoutes = express.Router();
const getProductDetails = require('../controllers/getDetailsController')
router.get('/getProductDetails',(req,res)=>{
    getProductDetails();
})
module.exports = getDetailsRoutes;