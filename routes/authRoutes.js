const passport=require('passport');//original passport npm module

module.exports = (app) =>{ //app as an arguement



    app.get('/auth/google',passport.authenticate('google',{
        scope:['profile','email']
    }));

    app.get(
        '/auth/google/callback',
        passport.authenticate('google'),
    (req,res)=>{
        res.redirect("/surveys");
    }
    );
    app.get('/api/logout',(req,res)=>{
        req.logout();
        res.redirect("/");
    });
    app.get('/api/current_user',(req,res)=>{
        res.send(req.user);
    });


    app.get('/auth/github',passport.authenticate('github'));

    app.get('/auth/github/callback',passport.authenticate('github'));
    
    

};