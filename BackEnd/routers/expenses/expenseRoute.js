const express = require('express');
const { createExpCtrl ,
        fetchAllExpCtrl,
        fetchExpDetailsCtrl,
        updateExpCtrl
 } = require('../../controllers/expenses/expenseControllers');
const authMiddleware = require('../../middleware/authMiddleware');



// call our controllers function here then export  this to app file 
const expensRoute = express.Router();

expensRoute.post('/' , authMiddleware ,createExpCtrl);
expensRoute.get('/', authMiddleware ,fetchAllExpCtrl);
expensRoute.get('/:id', authMiddleware ,fetchExpDetailsCtrl); // api/income/1 //id 
expensRoute.put('/:id' , authMiddleware, updateExpCtrl);

module.exports = expensRoute;