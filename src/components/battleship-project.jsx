import React from 'react';
import { Card, Button } from 'react-bootstrap';
import BattleshipLogo from '../media/battleshiplogo.png';

const BattleshipConsole = require('../media/battleship-console.gif');

export default function BattleshipProject() {
  return (
    <>
<Card className='battleship-card' style={{ width: '20rem', height: "35rem", background: "none", border: "hidden"}}>
  <Card.Img variant="top" src={BattleshipConsole} style={{ height: "19rem"}}/>
  <Card.Body className='battleship-body'>
    <Card.Title><Card.Img src={BattleshipLogo}></Card.Img></Card.Title>
    <Card.Text>
      The Battleship game can be ran on the console to play the classic game of battleship. Only one sided though. 
    </Card.Text>
    
    <Button className='github-btn-battleship' variant="primary" href='https://github.com/zackzellto/console-battleship-game' target='_blank' rel='noreferrer'>GitHub Repo</Button>
  </Card.Body>
</Card>
    </>
  );
}