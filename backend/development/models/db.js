const mongoose = require('mongoose');
const URL = 'mongodb://localhost/Grfive';
mongoose.connect(URL, { useNewUrlParser: true , useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', function(){
    console.log('DB connected');
});



//If you are using mongodb cluster put the URL in const URL 