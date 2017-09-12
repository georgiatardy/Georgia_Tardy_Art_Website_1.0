import React, { Component } from 'react';
import Drawing_1 from '../images/Drawing_2.png';
import {Grid, Row, Col, Thumbnail, Button} from 'react-bootstrap'
import artwork from '../data/Artwork';

 class Drawings extends Component {

  render() {
    let Items = artwork.map(function (Item) {
      if (Item.Type === "Drawing") {
        return (

            <Col xs={6} md={4}>
                <Thumbnail src= {Drawing_1} alt="242x200">
                <h3 className="Title">{Item.Title}</h3>
                <h5 className="Style">{Item.Style}</h5>
                <h5 className="Price">{Item.price}</h5>
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

        <h1 className= "App">Drawings</h1>
          <Grid>
             <Row>

              {Items}

             </Row>
          </Grid>

      </div>
      );
    }
  }
  export default Drawings;
