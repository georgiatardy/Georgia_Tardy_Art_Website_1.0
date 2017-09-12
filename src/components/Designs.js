import React, { Component } from 'react';
import Design_1 from '../images/Graphic_Design_1.jpg';
import Design_2 from '../images/Graphic_Design_2.jpg';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import artwork from '../data/Artwork';

 class Designs extends Component {

  render() {
    let Items = artwork.map(function (Item) {
      if (Item.Type === "Graphic Design") {
        return (

            <Col xs={6} md={4}>
                <Thumbnail src= {Design_1} alt="242x200">
                <h3 className="Title">{Item.Title}</h3>
                <h5 className="Style">{Item.Medium}</h5>
                <h5 className="price">{Item.price}</h5>
                  <p>{Item.Description}</p>
                  <p>
                    <Button bsStyle="primary">Buy Now</Button>&nbsp;
                    <Button bsStyle="default">Save to List</Button>
                  </p>
                </Thumbnail>
              </Col>
          )
        }
     });

    return (

      <div>

        <h1 className= "App">Designs</h1>
          <Grid>
             <Row>

              {Items}

             </Row>
          </Grid>

      </div>
      );
    }
  }
  export default Designs
