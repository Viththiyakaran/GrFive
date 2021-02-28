const express = require('express');
const cors = require('cors')
const app = express();
require('./models/db');
const bodyparser = require('body-parser');
const passport = require("passport");



app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
  });

app.use(cors())
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(express.json());

app.use(require("express-session")({ 
    secret: "Rusty is a dog", 
    resave: false, 
    saveUninitialized: false
})); 
  
app.use(passport.initialize()); 
app.use(passport.session()); 

const loginRouter  = require('./routers/login');
app.use('/',loginRouter);

const videoRouter = require('./routers/videos');
app.use('/videos', videoRouter);

const usersRouter = require('./routers/users');
app.use('/user', usersRouter);

const mcqRouter = require('./routers/mcq');
app.use('/mcq', mcqRouter);

app.listen(3001, function(){
    console.log("Server working");
})