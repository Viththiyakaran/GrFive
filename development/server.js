const express = require('express');
const app = express();
require('./models/db');
const bodyparser = require('body-parser');



app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.json());

const usersRouter = require('./routers/users');
app.use('/user', usersRouter);

app.listen(3000, function(){
    console.log("Server working");
})