import React from 'react';
import { Image } from 'react-bootstrap';

export default function StarWarsAPISVG() {
const SWAPIStaticSite = require('../../media/swapi.png');
const StarWarsLogo = require('../../media/starwarslogo.png');

  return (
        
        <svg className='swapi-svg' id='projectSVG' viewBox="0 0 1920 1080">
          <a id='projectLink' href='https://zack-react-swapi-app.herokuapp.com/' target="_blank" rel='noreferrer'>
            <foreignObject x="0" y="0" width="100%" height="100%">
              <Image id='projectGif' src={SWAPIStaticSite} alt='SWAPISite' width='100%' height='1200px'></Image>
            </foreignObject>
        <rect id='projectRect' x="0" y="0" width="100%" height="100%" />
        <image id='projectImage' x='18%' y='27%' width="1200" height="555" href={StarWarsLogo}></image>
          <defs>
            <linearGradient id="projectGradient">
              <stop offset="0%" stopColor="#37A28E" />
              <stop offset="100%" stopColor="#264653" />
            </linearGradient>
          </defs>
          </a>
        </svg>
       
  );  
}