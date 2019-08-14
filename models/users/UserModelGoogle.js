import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GoogleUserSchema = new Schema({
    username: String,
    googleId: String,
    thumbnail: String
});

const GoogleUser = mongoose.model('GoogleUserModel', GoogleUserSchema);

module.exports = GoogleUser;