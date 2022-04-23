import React from 'react';
import { Image } from 'react-bootstrap';

export default function ExpenseTrackerSVG() {
const ExpenseTrackerGif = require('../../media/expense-tracker.gif');
const ExpenseTrackerLogo = require('../../media/expense-tracker-icon.png');

  return (
  
        <svg id='projectSVG' viewBox="0 0 1920 1080">
          <a id='projectLink' href='https://zack-react-expense-tracker.herokuapp.com/' target="_blank" rel='noreferrer'>
            <foreignObject x="0" y="0" width="100%" height="100%">
              <Image id='projectGif' src={ExpenseTrackerGif} alt='battleshipgif' width='100%' height='1200px'></Image>
            </foreignObject>
        <rect id='projectRect' x="0" y="0" width="100%" height="100%" />
        <image id='projectImage' x='17%' y='22%' width="1300" height="655" href={ExpenseTrackerLogo}></image>
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