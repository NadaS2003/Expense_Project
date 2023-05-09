const mongoose = require('mongoose');

// schema 
const incomeSchema = mongoose.Schema({
  balance : {
    required : [true ,"Balance is required"],
    type : Number
},
  user : {
    type : mongoose.Schema.Types.ObjectId , // must be MONGOB ID 
    ref : 'User' ,
    required : [true ,"User ID is required"]
}
},{
  timestamp : true // time of created and last modification
});


//compile the schema into model
const Income = mongoose.model('Income', incomeSchema);

module.exports = Income;