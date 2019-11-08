import React, { Component } from 'react'
import {Navbar,Nav,Form,FormControl,Button} from 'react-bootstrap'

export default class Navigation extends Component {
    state = { val: '' }

    onInputChange = (event) => {
        this.setState({ val: event.target.value })
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        this.props.userSubmit(this.state.val);
    }

    render() {
        return (

           <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Intern Task</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
            </Nav>
            <Form inline onSubmit={this.onFormSubmit}>
            <FormControl type="text"  placeholder="Search" className="mr-sm-2"
               value={this.state.val}
               onChange={this.onInputChange}
                />
              <Button onClick={this.onFormSubmit} variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>
          
        )
      }
    }