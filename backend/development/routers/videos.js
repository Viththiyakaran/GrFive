const express = require('express');
const router = express.Router();
const videoModel = require('../models/video.model');





router.get('/',async(req,res) =>{
        try{
            
            //console.log(getVideo);
           res.render('videosView');
        
        }catch(err)
        {
            res.send("Error " + err);
        }
        
});

router.post('/AddViedo',async(req, res)=>{
    const add = new videoModel({
        title : req.body.title,
        category : req.body.category,
        link : req.body.link
    });
    try{    
        const added = await add.save();
        //res.json(added);
       // console.log(add);
        if( added !=null)
        {
            res.redirect('/videos');
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


router.get('/EditVideo/:id', async( req, res )=>{
        try{
            const getVideo= await videoModel.findById(req.params.id);
            res.render('editVideosView', {
                    getVideo
            });

        }catch(err)
        {
            res.send('Error ' + err);
        }
});


router.post('/UpdateVideo/:id', async(req,res)=>{
    try{
        const { id } = req.params;
        await videoModel.update({_id: id}, req.body);
        res.redirect('/videos');

    }catch(err)
    {
        res.send('Error' + err)
    }
});



router.get('/DeleteVideo/:id', async(req, res)=>{

    try{
        const { id } = req.params;
        await videoModel.remove({_id: id});
        res.redirect('/videos');
    }catch(err)
    {
        res.send("Error" + err);
    }
});




module.exports = router;