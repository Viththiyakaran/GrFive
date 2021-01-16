const { json } = require('body-parser');
const express = require('express');
const { count } = require('../models/mcq.model');
const router = express.Router();
const mcqModel = require('../models/mcq.model');
const userModel = require('../models/users.model');



router.get('/',async(req,res) =>{

      const mcqCount = await mcqModel.find();
      console.log(mcqCount);
        
});







module.exports = router;