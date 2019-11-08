import React from 'react';
import ReactDOM from 'react-dom';

import { connect } from 'react-redux';
import { Form, Button, Alert, Dropdown, Col } from 'react-bootstrap';
import { Redirect } from 'react-router';

import { submit_login } from './ajax';

class Approve extends React.Component {
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
      type: 'CHANGE_LOGIN',
      data: data,
    });
  }
  
  
render() {

    return (
      <div>
        <h1>Approve Timesheet</h1>
        <Form>
            <Form.Row>
          	<Col>
    	    <Form.Label>JobID</Form.Label>
    			<Form.Control as="select">
      				<option>ACME_JOB1</option>
      				<option>ACME_JOB2</option>
      				<option>ACME_JOB3</option>
      				<option>ACME_JOB4</option>
      				<option>ACME_JOB5</option>
    			</Form.Control>
    		</Col>
    		<Col>
  		 	<Form.Label>Date</Form.Label>
  		 	<Form.Control placeholder="MM/DD/YYYY"/>
  		 	</Col>
  		 	<Col>
  		 	<Form.Label>Hours</Form.Label>
  		 	<Form.Control placeholder="WorkHours"/>
  		 	</Col>
  		 	<Col>
  		 	<Form.Label>Status</Form.Label>
  		 	<Form.Control as="select">
      				<option>NEW</option>
      				<option>APPROVED</option>
      				<option>REJECTED</option>
    			</Form.Control>
  		 	</Col>
  		 	</Form.Row>
  		 	<Form.Row>
  		 	  <Button variant="primary" type="submit">Submit</Button>
  		 	</Form.Row>
		</Form>
      </div>
    );
  }
}

function state2props(state) {
  return state.forms.approve;
}

export default connect(state2props)(Approve);

