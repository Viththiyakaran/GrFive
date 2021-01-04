const { json } = require('body-parser');
const express = require('express');
const router = express.Router();


router.get('/',async(req,res) =>{
        res.render('dashboardView');
        
});






module.exports = router;