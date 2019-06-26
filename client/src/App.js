import React, { Component } from 'react';
import { getPreciseDistance } from 'geolib';


import {
  Container,
  Navbar,
  NavbarBrand,
  Row,
  Jumbotron,
  InputGroup,
  Input,
  Col
} from 'reactstrap';

import Geocode from './Geocode';


class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
       geocode: null,
       distance: 0
    };
  }

  
  getGeocode = (address) => {
    //This get's called on change and we don't want it to get called when removing a value
    if(address) {
    console.log(`/api/geocode/${address}`);
    fetch(`/api/geocode/${address}`)
    .then(res => res.json())
    .then(geocode => {
      this.setState({ geocode });
      console.log(geocode);
    });
  }
  }

  handleChangeAddress = (e) => {
    this.getGeocode(e.target.value);
  }

  getRevgeo = (latlng) => {
    //This get's called on change and we don't want it to get called when removing a value
    if(latlng) {  
    console.log(`/api/revcode/${latlng}`);
    fetch(`/api/revcode/${latlng}`)
    .then(res => res.json())
    .then(geocode => {
      this.setState({ geocode });
      console.log(geocode);
    });
  }
}

  handleChangeRevcode = (e) => {
    if (e){
    //console.log(e.target.value);
    this.getRevgeo(e.target.value);
  }
}


calDistance = (caldis) => { 
  
  var arr = caldis.split(",");
  if(arr.length===4) {
   var rdistancelat =  0; 
  rdistancelat = getPreciseDistance(
    { latitude: arr[0], longitude: arr[1] },
    { latitude: arr[2], longitude: arr[3] }
   
);
rdistancelat = rdistancelat/1609.344;

  this.setState({ distance: Math.floor(rdistancelat) });
  console.log(rdistancelat);
}
else {
  this.setState({ distance: 0 });
}
return this.distance;
}



handleDistance = (e) => {
  if (e){
  console.log(e.target.value+"Y");
  this.calDistance(e.target.value);
}
}


  render() {
    return (
      <Container fluid className="centered">
        <Navbar dark color="dark">
          <NavbarBrand href="/">Coding Challenge</NavbarBrand>
        </Navbar>
        <Row>
          <Col>
            <Jumbotron>
              <h1 className="display-3">google api geocode</h1>
              
              <InputGroup>
                <Input 
                  placeholder="by addreess..."
                  onChange={this.handleChangeAddress}
                />
                
                
              </InputGroup><br></br>

              <InputGroup>
              <Input 
                  placeholder="by Reverse geocode... Format is latitude,longitude"
                  onChange={this.handleChangeRevcode}
                />
                
                
              </InputGroup>



            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col>
            <h1 className="display-5">Current Geocode</h1>
            <InputGroup>
            <Input 
                  placeholder="Calculate the distance "
                   onChange={this.handleDistance}
                />
                
              
                </InputGroup>
            
          </Col>
        </Row>
        <Row>
          <Col>
          <h2 className="display-5">
          {this.state.distance > 0 && <p>Distance {this.state.distance} Miles</p>}
          </h2></Col>


        </Row>
        <Geocode data={this.state.geocode} distancedata = {this.state.distance}/>
      </Container>
    );
  }


}



export default App;
