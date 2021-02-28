const { json } = require('body-parser');
const express = require('express');
const router = express.Router();
const mcqModel = require('../models/mcq.model');
const { route } = require('./users');

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
       try{
        var ANS = [];
        for(var i = 0; i < req.body.choies.length; i++ )
        {ANS.push({text : req.body.choies[i]}) }
        const add = new mcqModel({
                  questionText : req.body.question, 
                  choies : ANS,
                  answer : req.body.answer
        })
        console.log(ANS );
      const added  = await add.save();
       if( added !=null)

       res.redirect('/mcq');

       }catch(err)
       {
        res.send("Error" + err)
       } 
      

});


router.get('/EditMcq/:id', async(req, res)=>{
        try{
                const getMcq = await mcqModel.findById(req.params.id);

                 res.render('editMcqView', {
                                getMcq
                       });
    
            }catch(err)
            {
                res.send('Error ' + err);
            }
})

router.post('/EditMcq/:id',async(req, res)=>{   
        
})

router.get('/DeleteMcq/:id', async(req, res)=>{

        try{
            const { id } = req.params;
            await mcqModel.remove({_id: id});
            res.redirect('/mcq');
        }catch(err)
        {
            res.send("Error" + err);
        }
    });


module.exports = router;