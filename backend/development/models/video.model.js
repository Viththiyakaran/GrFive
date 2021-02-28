const mongoose = require('mongoose');
const videoSchema = new mongoose.Schema({

    title:{
             type : String,
             required : true
    },
    
    category: {
            type : String,
            required : true
    },
    link : {
        type : String,
        required : true
    }
    
    
});


module.exports =  mongoose.model('videos',videoSchema);