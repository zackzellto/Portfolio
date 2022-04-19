import React from 'react';
import { Card, Button } from 'react-bootstrap';


const SnakeGameGif = require('../media/snakedemo.gif');

export default function SnakeGameProject() {
  return (
    <>
<Card className='snakegame-card' style={{ width: '20rem', height: "35rem", background: "none", border: "hidden" }}>
  <Card.Img className='snakegif' variant="top" style={{ height: "19rem"}} src={SnakeGameGif} />
  <Card.Body>
    <Card.Title>Snake Game</Card.Title>
    <Card.Text>
      A rendition of the classic game of snake. **NOT mobile friendly** Adjust window to fit content. 
    </Card.Text>
    <div>
    <Button className='snake-btn-demo' variant="primary" href='https://zackzellto.github.io/snake-game/' target='_blank' rel='noreferrer'>Play Snake!</Button></div>
    <Button className='snake-btn-repo' variant="primary" href='https://github.com/zackzellto/snake-game' target='_blank' rel='noreferrer'>GitHub Repo</Button>
  </Card.Body>
</Card>
    </>
  );
}