import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import  '../style/Income.css';
import  {UserData}  from "./UserData ";
import { useState } from "react";
import { Doughnut } from 'react-chartjs-2';

const StatesPage = ()=>{
  const [salary, setSalary] = useState(UserData[0].Salary);

  const [totalExpense, setTotalExpense] = useState(() => {
    const expenseSum = UserData.reduce((total, item) => {
      return total + (item.expense || 0);
    }, 0);
    return expenseSum;
  });
  const re=UserData[0].Salary-(UserData[1].expense+UserData[2].expense+UserData[3].expense+UserData[4].expense);
  const ex =UserData[1].expense+UserData[2].expense+UserData[3].expense+UserData[4].expense;
  const [remainingAmount, setRemainingAmount] = useState(
    UserData[0].Salary -
      UserData.slice(1).reduce((total, expense) => total + expense.expense, 0)
  );

const data = {
    labels: ['Remain','Expense'],
    datasets: [
        {
            data: [re,ex],
            borderColor: ['rgba(255,206,86,0.2)'],
            backgroundColor: ['#8AF724',
            '#F7243E' ],
            pointBackgroundColor: 'rgba(255,206,86,0.2)',
        }
        
    ]
}

return( 
  <div className='container'>
     <SideBar/>, 
      <div className="toncome">
        <p>Total Income</p>
        <p>{salary}</p>
      </div>
      <div className="toexpense">
         <p>Total Expense</p>
        <p>{totalExpense}</p>
      </div>
      <div className="toremain">
        <p>Total Remain</p>
        <p>{remainingAmount}</p>
      </div>

      
       <div className="container" style={{ width: "420px"  , margin: "-530px  0px 100px 570px" }}>
        
        <p id="so">Statistics</p>
        <Doughnut data={ data}  />
      </div>
			
  </div>
  );

}
export default StatesPage;
