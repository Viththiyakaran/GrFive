const express = require('express');
const router = express.Router();
const userModel = require('../models/users.model');


router.get('/api',async(req,res) =>{
    //res.render('mcqView.ejs')
    const getUser = await userModel.find();
    res.json(getUser);

});

router.post('/NewUser/api',async(req, res)=>{
    const add = new userModel({
        username : req.body.username,
        fullname : req.body.fullname,
        password : req.body.password,
        email : req.body.email,
        phone : req.body.phone,
        address : req.body.add,
        city : req.body.city,
        about : req.body.about
    });
    try{    
        const added = await add.save();
        //res.json(added);
        //console.log(added);
    }catch(err)
    {
        res.send("Error"  + err);
    }
}); 



router.get('/',async(req,res) =>{
        try{
            const getUser = await userModel.find();
            //console.log(getUser);
            res.render('userView',{
                 getUser
            });
        }catch(err)
        {
            res.send("Error " + err);
        }
        
});

router.post('/NewUser',async(req, res)=>{
    const add = new userModel({
        username : req.body.username,
        fullname : req.body.fullname,
        password : req.body.password,
        email : req.body.email,
        phone : req.body.phone,
        address : req.body.add,
        city : req.body.city,
        about : req.body.about
    });
    try{    
        const added = await add.save();
        //res.json(added);
        //console.log(added);
        if( added !=null)
        {
            res.redirect('/user');
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

router.get('/EditUser/:id', async( req, res )=>{
        try{
            const getUser = await userModel.findById(req.params.id);
            res.render('editUserView', {
                     getUser
            });

        }catch(err)
        {
            res.send('Error ' + err);
        }
});


router.post('/EditUser/:id', async(req,res)=>{
    try{
        const { id } = req.params;
        await userModel.update({_id: id}, req.body);
        res.redirect('/user');

    }catch(err)
    {
        res.send('Error' + err)
    }
});

router.get('/DeleteUser/:id', async(req, res)=>{

    try{
        const { id } = req.params;
        await userModel.remove({_id: id});
        res.redirect('/user');
    }catch(err)
    {
        res.send("Error" + err);
    }
});


module.exports = router;