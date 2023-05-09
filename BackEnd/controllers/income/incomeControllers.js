const expressAsyncHandler = require("express-async-handler");
const Income = require("../../models/Income");

//create 

const createIncCtrl = expressAsyncHandler(async(req , res) => {
    const {balance,user} = req.body;
    try {
        const income = await Income.create({
            balance ,
            user
        });
        res.json(income);
        
    } catch (error) {
        res.json(error);
    }

});



//fetch all income 

const fetchAllIncCtrl = expressAsyncHandler(async(req , res) => {
   console.log(req?.user);
    try {
        const income = await Income.find();
        res.json(income);
        
    } catch (error) {
        res.json(error);
    }

});

//fetch single income 

const fetchIncDetailsCtrl = expressAsyncHandler(async(req , res) => {
    const { id } = req?.params;
    try {
        const income = await Income.findById(id);
        res.json(income);
        
    } catch (error) {
        res.json(error);
    }

});


// update income 

const updateIncCtrl = expressAsyncHandler(async(req , res) => {
    const { id } = req?.params;
    const {balance } = req.body;
    try {
        const income = await Income.findByIdAndUpdate(id , {
            balance
        },{
            new : true   //  بترجع الكود الي حدثتو يعني بعد ما حدثت 
        }
        );
        res.json(income);
    } catch (error) {
        res.json(error);
        
    }


});


module.exports = { createIncCtrl , fetchAllIncCtrl , fetchIncDetailsCtrl , updateIncCtrl };