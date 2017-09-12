import React, {Component} from 'react';
import {Grid, Row, Col, Thumbnail, Button, PageHeader} from 'react-bootstrap'
import Artwork from '../data/Artwork.js';
import {NavLink} from 'react-router-dom';
import Abstract_wood_1 from '../images/Abstract_wood_1.jpg';
import Abstract_wood_2 from '../images/Abstract_wood_2.jpg';
import Abstract_wood_3 from '../images/Abstract_wood_3.jpg';
import Abstract_wood_4 from '../images/Abstract_wood_4.jpg';
import Abstract_wood_5 from '../images/Abstract_wood_5.jpg';
import Drawing_2 from '../images/Drawing_2.png';
import Graphic_Design_1 from '../images/Graphic_Design_1.jpg';



 class Products extends Component {

  render() {
    return (
<div className="container">

<h1 className ="App">Artwork</h1>

<Grid>
    <Row>
    <Col xs={6} md={4}>
      <Thumbnail src= {Abstract_wood_1} alt="242x200">
      <NavLink  activeClassName="selected" to="/paintings">
      <h3>Paintings</h3></NavLink>
        <p></p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {Drawing_2} alt="242x200">
      <NavLink  activeClassName="selected" to="/drawings">
      <h3>Drawings</h3></NavLink>
        <p></p>
      </Thumbnail>
    </Col>
    <Col xs={6} md={4}>
      <Thumbnail src= {Graphic_Design_1} alt="242x200">
      <NavLink  activeClassName="selected" to="/designs">
        <h3>Graphic Design</h3></NavLink>
        <p></p>
      </Thumbnail>
    </Col>

    </Row>
  </Grid>


    </div>
    );
  }

}
export default Products;
