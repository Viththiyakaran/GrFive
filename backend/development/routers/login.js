const express = require('express');
const router = express.Router();
const adminModel = require('../models/admin.model');
const LocalStrategy = require("passport-local");
const passportLocalMongoose =  require("passport-local-mongoose");
const passport = require("passport");
const mcqModel = require('../models/mcq.model');
const userModel = require('../models/users.model');


passport.use(new LocalStrategy(adminModel.authenticate())); 
passport.serializeUser(adminModel.serializeUser()); 
passport.deserializeUser(adminModel.deserializeUser()); 


// Showing home page 
router.get("/", function (req, res) { 
    res.render("indexView"); 
}); 



  
// Showing secret page 
router.get("/dashboard", isLoggedIn, async (req, res) => { 
    const mcqCount = await mcqModel.find({}).countDocuments();
    const usersCount = await userModel.find({}).countDocuments();
   
    res.render("dashboardView",{
        mcqCount,
        usersCount
    }); 
}); 
  
// Handling user signup 
router.post("/NewAdmin",async (req, res) =>{ 
    var username = req.body.username 
    var password = req.body.password 
    adminModel.register(new adminModel({ username: username }), 
            password, function (err, user) { 
        if (err) { 
            console.log(err); 
            return res.render("adminView"); 
        } 
  
        passport.authenticate("local")( 
            req, res, function () { 
            res.render("dashboardView"); 
        }); 
    }); 
}); 
  
//Showing login form 
router.get("/login", async (req, res) => { 
    res.render("indexView"); 
}); 
  
//Handling user login 
router.post("/login", passport.authenticate("local", { 
    successRedirect: "/dashboard", 
    failureRedirect: "/login"
}), function (req, res) { 
}); 

router.get("/logout", async (req, res) => { 
    req.logout(); 
    res.redirect("/"); 
}); 
  
function isLoggedIn(req, res, next) { 
    if (req.isAuthenticated()) return next(); 
    res.redirect("/login"); 
} 
  



router.get('/profile',isLoggedIn,async(req,res) =>{
        res.render('adminView');
        
});


module.exports = router;