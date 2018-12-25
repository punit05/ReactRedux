const passport=require("passport");
const GoogleStrategy=require("passport-google-oauth20").Strategy;
const GithubStrategy=require('passport-github').Strategy;
const mongoose=require('mongoose');
const keys=require('../config/keys');//go to newproject find config
const User=mongoose.model('users');

passport.serializeUser((user,done)=>
{
    //that user.id is not profile id this is the mongo id of the record
    done(null,user.id);//done is a callback we have to call after have done wome work
})
passport.deserializeUser((id,done)=>
{
    User.findById(id)
    .then(user=>{
        done(null,user)
    })
})

passport.use(new GoogleStrategy({
    clientID:keys.googleClientID,
    clientSecret:keys.googleClientSecret,
    callbackURL:'https://thawing-woodland-77529.herokuapp.com/auth/google/callback', //user will send to after permission
    proxy:true
},(accessToken,refreshToken,profile,done)=>{
   User.findOne({googleId:profile.id})
   .then((existingUser)=>
{
    if(existingUser)
    {

        //if the user already exist
    done(null,existingUser);
    }
    else 
    {
        new User({googleId:profile.id}).save()//save will take the model instance and save it to the database 
    .then(user=>done(null,user));
    }
})
   
})
);
//console.log(keys.ClientID);
//console.log(keys.linkedinClientSecret);
// passport.use(new GithubStrategy({
    
//     clientID:keys.githubClientID,
//     clientSecret:keys.githubClientSecret,
//     callbackURL:"http://localhost:5000/auth/github/callback", //user will send to after permission

// },(accessToken,refreshToken,profile,done)=>{
//     console.log(accessToken);
//     console.log(profile);
//    User.findOne({githubId:profile.id})
//    .then((existingUser)=>
// {
//     if(existingUser)
//     {

//         //if the user already exist
//     done(null,existingUser);
//     }
//     else 
//     {
//         new User({githubId:profile.id}).save()//save will take the model instance and save it to the database 
//     .then(user=>done(null,user));
//     }
// })
   
// })
// );
