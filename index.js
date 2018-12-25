const express=require("express");
const mongoose =require('mongoose');
const cookieSession=require('cookie-session');
const passport=require('passport');
const keys=require('./config/keys');

//const authRoutes=require('./routes/authRoutes');
require('./models/User');
require('./services/passport');//because from passport.js we are not exporting anything we are not returning anything we just want that file to be there.
mongoose.connect(keys.mongoURI);
const app=express();

app.use(cookieSession({
    maxAge:30 * 24 * 60 * 60 *1000,//30 days
    keys:[keys.cookieKey]

}));
app.use(passport.initialize());
app.use(passport.session());


//console.developers.google.com
require('./routes/authRoutes')(app);
//authRoutes(app);



const PORT = process.env.PORT || 5000;
app.listen(PORT);