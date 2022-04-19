import React from 'react';
import { Card, Button } from 'react-bootstrap';

const BattleshipConsole = require('../media/battleship-console.gif');

export default function BattleshipProject() {
  return (
    <>
<Card className='battleship-card' style={{ width: '20rem', height: "35rem", background: "none", border: "hidden"}}>
  <Card.Img variant="top" src={BattleshipConsole} style={{ height: "19rem"}}/>
  <Card.Body className='battleship-body'>
    <Card.Title >Battleship</Card.Title>
    <Card.Text>
      Battleship is a console app from the inspiration of the board game. Only one sided though. 
    </Card.Text>
    
    <Button className='github-btn-battleship' variant="primary" href='https://github.com/zackzellto/console-battleship-game' target='_blank' rel='noreferrer'>GitHub Repo</Button>
  </Card.Body>
</Card>
    </>
  );
}