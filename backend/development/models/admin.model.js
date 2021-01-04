const mongoose = require('mongoose');
const passportlocalmongoose=require("passport-local-mongoose");
const adminSchema = new mongoose.Schema({

    username:{
             type : String,
             //required : true
    },
    password : {
            type : String,
           // required : true
    }

    
});

adminSchema.plugin(passportlocalmongoose);
module.exports =  mongoose.model('admins',adminSchema);