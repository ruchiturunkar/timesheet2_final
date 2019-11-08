import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { Form, Button, Alert, Dropdown, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';

import { submit_timesheet} from './ajax';

function state2props(state) {
  return state.forms.new_timerecord;
}

class Book extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
    };
  }

  redirect(path) {
    this.setState({
      redirect: path,
    });
  }
  
  
 
 changed(data) {
    this.props.dispatch({
      type: 'CHANGE_NEW_RECORD',
      data: data,
    });
  }


  
  
render() {

    return (
      <div>
        <h1>Book Timesheet</h1>
        <Form>
            <Form.Row>
          	<Col>
    	    <Form.Label>JobID</Form.Label>
    			<Form.Control as="select" onChange={(ev) => this.changed({jobId: ev.target.value})}>
      				<option>ACME_JOB1</option>
      				<option>ACME_JOB2</option>
      				<option>ACME_JOB3</option>
      				<option>ACME_JOB4</option>
      				<option>ACME_JOB5</option>
    			</Form.Control>
    		</Col>
    		<Col>
  		 	<Form.Label>Date</Form.Label>
  		 	<Form.Control placeholder="MM/DD/YYYY" onChange={(ev) => this.changed({date: ev.target.value})}/>
  		 	</Col>
  		 	<Col>
  		 	<Form.Label>Hours</Form.Label>
  		 	<Form.Control placeholder="WorkHours" onChange={(ev) => this.changed({hours: ev.target.value})}/>
  		 	</Col>
  		 	<Col>
  		 	<Form.Label>Status</Form.Label>
  		 	<Form.Control as="select" disabled>
      				<option>NEW</option>
    			</Form.Control>
  		 	</Col>
  		 	</Form.Row>
  		 	<Form.Row>
  		 	  <Button variant="primary" type="submit" onClick={() => submit_timesheet(this)}>Submit</Button>
  		 	</Form.Row>
		</Form>
      </div>
    );
  }
}



export default connect(state2props)(Book);

