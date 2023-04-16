import 'bootstrap/dist/css/bootstrap.min.css';
import SideBar from './SideBar';
import '../style/TableExpensePage.css'
import jsonData from '../data.json';
import Table from 'react-bootstrap/Table';

const ExpensePage = ()=>{
   
return( 
  <div className='container' >
     <SideBar/>,
     <div className='tal'>
      <p id="so">Expenses List</p>
      <Table  striped hover style={{textAlign:"center"}} >
      <thead > 
        <tr >
          <th >ID</th>
          <th >Expense Amount</th>
          <th>Expense Type</th>
        </tr>
      </thead>
      <tbody>
       {jsonData.map((info) => {
            return (
        <tr>
        <td>{info.id}</td>
        <td>{info.expense}</td>
        <td>{info.expense_type}</td>
      </tr>
        );
       })}
      </tbody>
    </Table>
    </div>
     
  </div>
  );

}
export default ExpensePage;