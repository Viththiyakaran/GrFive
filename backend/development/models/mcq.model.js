const mongoose = require('mongoose');


const questionSchema  = new mongoose.Schema({

    text : {
        type :  String
    }

});
const mcqSchema = new mongoose.Schema({

    questionText :{
        type : String,
        //required : true
    },
    choies  : [questionSchema],

    answer : {
        type : String,
        //required : true
    }

});

module.exports = mongoose.model('mcq',mcqSchema);


