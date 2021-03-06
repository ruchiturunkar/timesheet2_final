import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, NavLink, Link } from 'react-router-dom';
import { Navbar, Nav, Col } from 'react-bootstrap';
import { Provider, connect } from 'react-redux';
import Login from './login';
import Approve from './approve';
import Book from './book';
import store from './store';

export default function init_page(root) {

  let tree = (
    <Provider store={store}>
      <Page />
    </Provider>
  );

  ReactDOM.render(tree, root);
}

function Page(props) {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Col md="4">
		<Nav>
          	  <Nav.Item>
            	    <NavLink to="/" exact activeClassName="active" className="nav-link">
	  					Home	
            	    </NavLink>
          	  </Nav.Item>
          	  <Nav.Item>
            	    <NavLink to="/users" exact activeClassName="active" className="nav-link">
             			User
            	    </NavLink>
          	  </Nav.Item>
        	</Nav>
	</Col>

	<Col md="8">
	  <Session />
	</Col>
      </Navbar>
      
      <Switch>
        <Route exact path="/">
          <h1>Acme Timesheet App</h1>
        </Route>

        <Route exact path="/users">
          <h1>Users</h1>
        </Route>
	
	<Route exact path="/login">
          <Login />
        </Route>
        
    <Route exact path="/approve">
          <Approve />
        </Route>    
        
        
    <Route exact path="/book">
          <Book />
        </Route>  
      </Switch>
    </Router>
  );
}



let Session = connect(({session}) => ({session}))(({session, dispatch}) => {
  function logout(ev) {
    ev.preventDefault();
    localStorage.removeItem('session');
    dispatch({
      type: 'LOG_OUT',
    });
    
  }

  if (session) {
  	if (session.isManager) {
  		return (
  	  		<Nav>
  	  			<Col md="4">
	  			<Nav.Item>
	  				<NavLink className="nav-link" to="/approve" exact activeClassName="active">Approve Timesheet</NavLink>	
	  			</Nav.Item> 
	  			</Col>
       			<Nav.Item>
          			<p className="text-light py-2">User: {session.user_name}</p>
        		</Nav.Item>
        		<Nav.Item>
          			<a className="nav-link" href="#" onClick={logout}>Logout</a>
        		</Nav.Item>
      		</Nav>
      	);
	}
	else {
		return (
			<Nav>
				<Col md="4">	
	  			<Nav.Item>
					<NavLink className="nav-link" to="/book" exact activeClassName="active">Book Timesheet</NavLink>
	  			</Nav.Item>
	  			</Col>
	  			<Nav.Item>
          			<p className="text-light py-2">User: {session.user_name}</p>
        		</Nav.Item>
        		<Nav.Item>
          			<a className="nav-link" href="/" onClick={logout} to="/">Logout</a>
        		</Nav.Item>
        	</Nav>
	  			
	  );
	}
  
  }
  else {
    return (
      <Nav>
        <Nav.Item>
          <NavLink to="/login" exact activeClassName="active" className="nav-link">
            Login
          </NavLink>
        </Nav.Item>
      </Nav>
    );
  }
});
