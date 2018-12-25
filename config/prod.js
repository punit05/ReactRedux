//prod.js production keys here


module.exports={
    googleClientID:process.env.GOOGLE_CLIENT_ID,
    googleClientSecret:process.env.GOOGLE_CLIENT_SECRET,
    mongoURI:process.env.MONGO_URI,
    cookieKey:process.env.COOKIE_KEY,
    githubClientID:process.env.GITHUB_CLIENT_ID,
    githubClientSecret:process.env.GITHUB_CLIENT_SECRET
    
};



//https://accounts.google.com/o/oauth2/v2/auth?response_type=code&redirect_uri=https%3A%2F%2Fthawing-woodland-77529.herokuapp.com%2Fauth%2Fgoogle%2Fcallback&scope=profile%20email&client_id=process.env.GOOGLE_CLIENT_ID

//mongodb://punit:password5@ds113693.mlab.com:13693/dangit