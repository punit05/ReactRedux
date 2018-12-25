const mongoose = require('mongoose');
//const Schema = mongoose.Schema; or
const { Schema }=mongoose;

const userSchema = new Schema({
    googleId:String

});
//creating the collection users
mongoose.model('users',userSchema);
