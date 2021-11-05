const mongoose = require('mongoose');
const { isEmail } = require('validator');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minimum password length is 6 characters']
    },
});
//after save to db
userSchema.post('save', (doc, next) => {
    console.log('new user was created and saved', doc);
    next();
} )


//fire before saving to doc
userSchema.pre('save', (next) =>{
    console.log("User about to be created and saved", this);
    next();
})
const User = mongoose.model('user', userSchema);

module.exports = User;