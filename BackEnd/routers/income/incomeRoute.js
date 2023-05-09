const express = require('express');
const { createIncCtrl ,
        fetchAllIncCtrl,
        fetchIncDetailsCtrl,
        updateIncCtrl
    } = require('../../controllers/income/incomeControllers');
const authMiddleware = require('../../middleware/authMiddleware');

    

// call our controllers function here then export  this to app file //
const incomeRoute = express.Router();

incomeRoute.post('/' , authMiddleware, createIncCtrl);
incomeRoute.get('/' , authMiddleware,fetchAllIncCtrl);
incomeRoute.get('/:id' ,authMiddleware, fetchIncDetailsCtrl); // api/income/1 //id 
incomeRoute.put('/:id' ,authMiddleware,updateIncCtrl);

module.exports = incomeRoute;