import React from 'react';
import './App.css';

import TextLinkExample from './Components/navBar'
import Name from './Components/Name';
import Description from './Components/Description';
import Image from './Components/Image';
import Price from './Components/Price';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Greeting from './Components/Greeting';



function App() {
  return (
    <div className="App">
      <TextLinkExample />
    <Card  className='card'>
      {/* Image.jsx */}
      <Image />
      <Card.Body>
        <Card.Title className='title'>
          {/* Name.jsx */}
          <Name />
        </Card.Title>
        <Card.Text>
          {/* Description.jsx */}
          <Description />
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        {/* Price.jsx */}
        <Price />
      </ListGroup>
      <Card.Body >
        <Card.Link className='link' href="https://www.mbusa.com/en/vehicles/class/gla/suv">Explore Other Models in This Class</Card.Link>
        <Card.Link className='link' href="https://www.mbusa.com/en/vehicles/bodystyle/suvs">Mercedes-Benz SUVs</Card.Link>
      </Card.Body>
    </Card>
    <Greeting />

    </div>
  );
}

export default App;
