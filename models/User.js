const mongoose = require('mongoose');
//const Schema = mongoose.Schema; or
const { Schema }=mongoose;

const userSchema = new Schema({
    googleId:String,
    credits:{type:Number,default:0}

});
//creating the collection users
mongoose.model('users',userSchema);
