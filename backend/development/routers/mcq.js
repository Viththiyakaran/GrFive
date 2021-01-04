const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mcqModel = require('../models/mcq.model');

router.get('/api',async(req,res) =>{
        //res.render('mcqView.ejs')
        const getQue = await mcqModel.find();
        res.json(getQue);
 
});

router.get('/',async(req,res) =>{
        //res.render('mcqView.ejs')
        const getQue = await mcqModel.find();
        //res.json(getQue);
        res.render('mcqView',{
               getQue 
        })
        
});


router.post('/AddQue', async(req, res)=>{
       
       var ANS = [];

       for(var i = 0; i < req.body.answer.length; i++ )
       {
               ANS.push({text : req.body.answer[i], score : req.body.score[i] })
       }

       const add = new mcqModel({
                 questionText : req.body.question, 
                 answers : ANS
       })
      console.log(ANS,add );

      const added  = await add.save();

      if( added !=null)
      res.redirect('/user');

});



module.exports = router;