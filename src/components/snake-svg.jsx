import React from 'react';
import { Image, Container } from 'react-bootstrap';
import SnakeLogo from '../media/snake-thumbnail.png';




export default function SnakeGameSVG() {
const SnakeGameGif = require('../media/snakedemo.gif');

  return (
    <Container>
      
    <svg id='projectSVG' viewBox="0 0 1920 1080">
    <a id='projectLink' href='https://zackzellto.github.io/snake-game/' target="_blank" rel='noreferrer'>
    
    <foreignObject x="0" y="0" width="100%" height="100%">
        <Image id='projectGif' src={SnakeGameGif} alt='snakegif'></Image>
         </foreignObject>
         <rect id='projectRect' x="0" y="0" width="100%" height="100%"></rect>

      <defs>
        <linearGradient id="projectGradient">
          <stop offset="0%" stopColor="rgb(58, 60, 74)" />
          <stop offset="100%" stopColor="rgb(36, 38, 50)" />
        </linearGradient>
      </defs>
      
      </a>
      </svg><Image id='projectImage' src={SnakeLogo} width={100} height={100} />
      </Container>

    
  );  
}
