const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');

// schema 
const expenseSchema = mongoose.Schema({
  expenseAmount : {
    required : [true ,"Expense Amount is required"],
    type : Number
},
   type : {
    type :String ,
    default :"expense"
},
  user : {
    type : mongoose.Schema.Types.ObjectId , // must be MONGOB ID 
    ref : 'User' ,
    required : [true ,"User ID is required"]
  }
},{
  timestamp : true
});

// pagination 
expenseSchema.plugin(mongoosePaginate);


const Expense = mongoose.model("Expense" , expenseSchema);

module.exports = Expense;