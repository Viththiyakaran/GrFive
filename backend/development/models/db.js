const mongoose = require('mongoose');
const URL = 'mongodb://localhost/Grfive';
mongoose.connect(URL, { useNewUrlParser: true , useUnifiedTopology: true});
const con = mongoose.connection;

con.on('open', function(){
    console.log('DB connected');
});



//mongodb+srv://grfive_app:94@Viththi@cluster0.mstro.mongodb.net/<dbname>?retryWrites=true&w=majority