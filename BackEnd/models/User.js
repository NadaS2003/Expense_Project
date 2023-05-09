const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 
const validator = require('validator');

// schema 
const userSchema = mongoose.Schema({
  name : {
    required : [true ,"Name is required"],
    type : String
},
 username : {
    required : [true,"User name is required"],
    type: String,
    unique: true
},
  email : {
    required : [true ,"Email is required"],
    type: String
  
},
  password : {
    required : [true ,"Password is required"],
    type : String,
    minLength: 8,
    maxLength:11
  
}
},{
  timestamp : true // time of created and last modification
});


// validate email 
userSchema.path('email').validate(function (email) {
   var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
   return emailRegex.test(email); 
}, 'The e-mail error validation')


// Hash password
userSchema.pre('save', async function(next){
  if(!this.isModified("password")){
    next();
  }

  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
   next();
});

//verify password
userSchema.methods.isPasswordMatch = async function(enteredPassword){
  return await bcrypt.compare(enteredPassword, this.password);
};

//compile the schema into model
const User = mongoose.model('User', userSchema);

module.exports = User;
