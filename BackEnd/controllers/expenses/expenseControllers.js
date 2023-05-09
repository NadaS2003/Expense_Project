const expressAsyncHandler = require("express-async-handler");
const Expense = require("../../models/Expenses");


//create 

const createExpCtrl = expressAsyncHandler(async(req , res) => {
    const {expenseAmount , type ,user} = req.body;
    try {
        const expense = await Expense.create({
            expenseAmount ,
            type,
            user
        });
        res.json(expense);

    } catch (error) {
        res.json(error);
    }

});

//fetch all expense 

const fetchAllExpCtrl = expressAsyncHandler(async(req , res) => {
   const { page } =req?.query ;
    try {
        const expense = await Expense.paginate({} , { limit: 10 , page: Number(page)}  );
        res.json(expense);
        
    } catch (error) {
        res.json(error);
    }

});

//fetch single expense 

const fetchExpDetailsCtrl = expressAsyncHandler(async(req , res) => {
    const { id } = req?.params;
    try {
        const expense = await Expense.findById(id);
        res.json(expense);
        
    } catch (error) {
        res.json(error);
    }

});


// update expense 

const updateExpCtrl = expressAsyncHandler(async(req , res) => {
    const { id } = req?.params;
    const {expenseAmount , type} = req.body;
    try {
        const expense = await Expense.findByIdAndUpdate(id , {
            expenseAmount,
            type
        },{
            new : true   //  بترجع الكود الي حدثتو يعني بعد ما حدثت 
        }
        );
        res.json(expense);
    } catch (error) {
        res.json(error);
        
    }


});


module.exports = { createExpCtrl , fetchAllExpCtrl , fetchExpDetailsCtrl , updateExpCtrl };