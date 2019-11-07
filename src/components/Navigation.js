import React, { Component } from 'react'

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
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand" href="/">Intern Task</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
    
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="/">Home <span className="sr-only">(current)</span></a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/">Search</a>
                </li>
               </ul>
              <form form onSubmit={this.onFormSubmit} className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text"  placeholder="Search" aria-label="Search" href="/.down"
                 value={this.state.val}
                 onChange={this.onInputChange}
                />
               </form>
            </div>
            <div className="down"> </div>
          </nav>
        )
      }
    }