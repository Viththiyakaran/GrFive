const mongoose = require('mongoose');
const usersSchema = new mongoose.Schema({

    username:{
             type : String,
             required : true
    },
    password : {
            type : String,
            required : true
    },
    fullname : {
            type : String,
            required : true
    },
    email : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        //required : true
    },
    city :{
        type : String,
        //required : true
    },
    about : {
        type : String,
        required : true,
        default : false
    }
    
});


module.exports =  mongoose.model('users',usersSchema);