import React from 'react';
import { Image } from 'react-bootstrap';




export default function SnakeGameSVG() {
const SnakeGameGif = require('../media/snakedemo.gif');

  return (
    <>
    <a href='https://zackzellto.github.io/snake-game/' target="_blank" rel='noreferrer'>
    <svg id='projectSVG' viewBox="0 0 1920 1080">
    <foreignObject x="0" y="0" width="100%" height="100%">
        <Image src={SnakeGameGif} alt='snakegif'></Image>
         </foreignObject>
         <rect id='projectRect' x="0" y="0" width="100%" height="100%" fill="#141e30" />

         <text id='projectText' fill='white' x = '20%' y = '60%'> Snake Game </text>
</svg>
</a>

    </>
  );  
}
