import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
 import  {UserData}  from "./UserData ";
 import  { useState } from "react";
import React, { useCallback } from 'react';

import jsonData from '../data.json';

function Expense() {
   
  return (
    <Form >

      <fieldset >
         <header>
        <h1>Expense</h1>
      <div className="total-expense">
        
        <h2>£00</h2>
      </div>
    </header>
        <Form.Group style={{width:"250px",margin:"50px 0px 0px 7px"}} className="mb-auto">
          <Form.Label htmlFor="disabledTextInput" type="number">Enter Expense</Form.Label>
          <Form.Control 
           id="disabledTextInput" placeholder="Enter Expense" />
          <Button id='add' className= 'btn btn-danger'type="submit">Add</Button>
    
        </Form.Group>
        <Form.Group style={{width:"250px",margin:"-8px 0px 0px 7px"}} className="mb-1">
          <Form.Label htmlFor="disabledSelect">Type</Form.Label>
          <Form.Select id="disabledSelect">
            {UserData.map((expenses) => (
          
            <option key={expenses.id} value={expenses} >{expenses.Expense_type}</option>
            ))}
           
          </Form.Select>
        </Form.Group>
        
      </fieldset>
    </Form>
  );
}

export default Expense;