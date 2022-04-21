import React from 'react';
import { Image } from 'react-bootstrap';

export default function BattleshipSVG() {
const BattleshipGif = require('../media/battleship-console.gif');
const BattleshipLogo = require('../media/battleship-logo.png');

  return (
    
        <svg id='projectSVG' viewBox="0 0 1920 1080">
          <a id='projectLink' href='https://github.com/zackzellto/console-battleship-game' target="_blank" rel='noreferrer'>
            <foreignObject x="0" y="0" width="100%" height="100%">
              <Image id='projectGif' src={BattleshipGif} alt='battleshipgif' width='100%' height='100%'></Image>
            </foreignObject>
        <rect id='projectRect' x="0" y="0" width="100%" height="100%" />
        <image id='projectImage' x='17%' y='32%' width="1300" height="455" href={BattleshipLogo}></image>
          <defs>
            <linearGradient id="projectGradient">
              <stop offset="0%" stopColor="rgb(58, 60, 74)" />
              <stop offset="100%" stopColor="rgb(36, 38, 50)" />
            </linearGradient>
          </defs>
          </a>
        </svg>
    
  );  
}