import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import  '../style/Income.css';
 import  {UserData}  from "./UserData ";
 import { useState } from "react";
import Chart from 'react-google-charts'


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
    const pieData = [
        ['Task', 'Hours per Day'],
        ['Remain', re],
        ['Expense',ex],
 
]
const pieOptions = {
 slices: [
        {
            color: '#8AF724',
        },
        {
            color: '#F7243E',
        },
    ]
  ,pieHole: 0.4,
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

       <div className="container" style={{ width: "400px"  , margin: "-530px  0px 100px 470px" }}>
        <p id="so">Statistics</p>
        <Chart
          width={'900px'}
          height={'420px'}
          chartType="PieChart"
          loader={<div>Loading Chart</div>}
          data={pieData}
          options={pieOptions}
          rootProps={{ 'data-testid': '3' }}
        />
      </div>
			
  </div>
  );

}
export default StatesPage;