import React from 'react';
import { Image } from 'react-bootstrap';

export default function SnakeGameSVG() {
const SnakeGameGif = require('../../media/snakedemo.gif');
const SnakeLogo = require('../../media/snake-thumbnail.png');

  return (
 
        <svg className='snake-svg' id='projectSVG' viewBox="0 0 1920 1080">
          <a id='projectLink' href='https://zackzellto.github.io/snake-game/' target="_blank" rel='noreferrer'>
            <foreignObject x="0" y="0" width="100%" height="100%">
              <Image id='projectGif' src={SnakeGameGif} alt='snakegif'></Image>
            </foreignObject>
        <rect id='projectRect' x="0" y="0" width="100%" height="100%" />
        <image id='projectImage' x='35%' y='25%' width="600" height="555" href={SnakeLogo}></image>
          <defs>
            <linearGradient id="projectGradient">
              <stop offset="0%" stopColor="rgb(150, 190, 126)" />
              <stop offset="100%" stopColor="rgb(192, 195, 212)" />
            </linearGradient>
          </defs>
          </a>
        </svg>
  
  );  
}
