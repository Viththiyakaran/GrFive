const express = require('express');
const router = express.Router();
const adminModel = require('../models/admin.model');


router.get('/',async(req,res) =>{
        res.render('indexView');

});

router.get('/profile',async(req,res) =>{
        res.render('adminView');
        
});

router.post('/NewAdmin', async( req, res)=>{
        const add = new adminModel({
                username : req.body.username,
                password : req.body.password
            });
            try{    
                const added = await add.save();
                //res.json(added);
                //console.log(added);
                if( added !=null)
                {
                    res.redirect('/profile');
                }
                else
                {
                    console.log(added);
                }
                
            }catch(err)
            {
                res.send("Error"  + err);
            }
});

module.exports = router;