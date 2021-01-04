const mongoose = require('mongoose');


const questionSchema  = new mongoose.Schema({

    text : {
        type :  String
    },
    score : {
        type : Number
    }

});
const mcqSchema = new mongoose.Schema({

    questionText :{
        type : String,
        //required : true
    },
    answers : [questionSchema]

});

module.exports = mongoose.model('mcq',mcqSchema);