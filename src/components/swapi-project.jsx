import React from 'react';
import { Card, Button } from 'react-bootstrap';
import SWLogo from '../media/starwarslogo.png';
import SWAPI from '../media/swapi.png';


export default function StarWarsAPIProject() {
  return (
    <>
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={SWAPI} />
  <Card.Body>
    <Card.Title><Card.Img src={SWLogo}></Card.Img></Card.Title>
    <Card.Text>
      This is a simple search API that allows you to search for a Star Wars character. It has pagination, filtering down to a single character, and a search bar.
    </Card.Text>
    <div>
    <Button className='demo-btn-swapi' variant="primary" href='https://zack-react-swapi-app.herokuapp.com/' target='_blank' rel='noreferrer' >Live Demo</Button></div>
    <Button className='github-btn-swapi' variant="primary" href='https://github.com/zackzellto/SWAPI' target='_blank' rel='noreferrer'>GitHub Repo</Button>
  </Card.Body>
</Card>
    </>
  );
}
