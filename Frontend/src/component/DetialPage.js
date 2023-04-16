import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import  {UserData}  from "./UserData ";
import BarChart from './BarChart';
import { useState } from "react";
const DetialPage = ()=>{
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.Expense_type),
    datasets: [
      {
        label: "expense ",
        data: UserData.map((data) => data.expense),
        backgroundColor: [
          "#e9838f",
          "#e9838f",
          "#e9838f",
          "#e9838f",
          "#e9838f",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
return( 
  <div className='container'>
     <SideBar/>,
       {UserData.slice(1).map((data) => (
        <div itemID={data.id} className="Detial">
          <p>{data.Expense_type}: </p>
          <p>{data.expense}</p>
        </div>
        
      ))},
         <div style={{ width: "500"  , margin: "-550px  0 0px 480px" ,height:"450px"}}>
          <p id="so">Expense Types Chart</p>
        <BarChart chartData={userData}  />
      </div>
  </div>
  
  );

}
export default DetialPage;