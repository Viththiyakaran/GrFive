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

const loginRouter  = require('./routers/login');
app.use('/',loginRouter);

const dashboardRouter = require('./routers/dashboard');
app.use('/dashboard', dashboardRouter);

const usersRouter = require('./routers/users');
app.use('/user', usersRouter);

const mcqRouter = require('./routers/mcq');
app.use('/mcq', mcqRouter);

app.listen(3000, function(){
    console.log("Server working");
})