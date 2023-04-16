import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './component/SideBar';
import Income from './component/Income';
import Expense from './component/Expense';
import './style/SideBar.css';
import './style/HomePage.css'

const HomePage = ()=>{

return( 
  
  <div className="container">
     <SideBar />
     <div className='greet'>
      <p>Welcome&#x1F44B;!</p>
     </div>
    
     <div className='income' >
        <Income />
     </div>
     <div className='expense'>
       <Expense />
     </div>

  </div>

  );

}
export default HomePage;