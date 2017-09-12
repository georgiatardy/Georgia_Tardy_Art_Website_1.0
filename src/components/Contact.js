import React, { Component } from 'react';
import {Button} from 'react-bootstrap'

export default class Contact extends Component {

  render() {
    return (

      <div className="container">

        <h1>Contact Us!</h1>

        <form className="form-group">
      <div className="form-group">
        <label>Email</label>
        <input type="email" className="form-control" placeholder="Email"/>
      </div>
      <div className="form-group">
        <label>Password</label>
        <input type="password" className="form-control" placeholder="Password"/>
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea type="email" className="form-control" placeholder="Add Message"></textarea>
        <br></br>
        <Button className="btn btn-default">Default</Button>
      </div>


       </form>



      </div>
      );
    }
  }
