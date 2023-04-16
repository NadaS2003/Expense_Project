import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  '../style/Income.css';
function Income() {
  return (
    <Form >
      <fieldset >
        <header>
        <h1>Income</h1>
      <div className="total-income">
        
        <h2>£00</h2>
      </div>
    </header>
        <Form.Group style={{width:"250px",margin:"50px 0px 0px 7px"}} className="mb-3">
          <Form.Label  htmlFor="disabledTextInput">Enter Income</Form.Label>
          <Form.Control  id="message"  placeholder="Enter Income" />
				<Button className= 'btn btn-info' id='add' type="submit">Add</Button>
        </Form.Group>
        
      </fieldset>
    </Form>
  );
}

export default Income;