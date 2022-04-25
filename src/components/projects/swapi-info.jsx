import React from 'react'
import { Image } from 'react-bootstrap'
import ReactIcon from '../../media/icons/react-icon.png'
import HTMLIcon from '../../media/icons/html-icon.png'
import CSSIcon from '../../media/icons/css-icon.png'
import BootstrapIcon from '../../media/icons/bootstrap-icon.png'
import GitHubIcon from '../../media/github-logo.png'


export default function SWAPIInfo() {
  return (
    <>
    
        <h1 id='project-info-title'>Star Wars Search</h1>
        <br />
        <div id='project-info-summary'>
            <p>
                This app pulls data from the SWAPI api to display information about the characters and planets in the Star Wars universe.
                <br />
                You can search for a character by various parameters and see their information.
                
            </p>
        </div>
        <br />
        <div id='project-info-tech'>
                <text id='project-built-with-text'>Built with: 
                    <a href="https://reactjs.org/"> 
                        <Image src={ReactIcon} alt='react-icon' width='40px' height='40px' />
                    </a>
                    <a href="https://www.w3schools.com/html/"> 
                        <Image src={HTMLIcon} alt='html-icon' width='40px' height='40px' />
                    </a>
                    <a href="https://www.w3schools.com/css/"> 
                        <Image src={CSSIcon} alt='css-icon' width='40px' height='40px' />
                    </a>
                    <a href="https://getbootstrap.com/"> 
                        <Image src={BootstrapIcon} alt='bootstrap-icon' width='60px' height='60px' />
                    </a>
                </text>
            </div>
        <br />
        <div id='project-info-links'>
            <a href='https://github.com/zackzellto/console-battleship-game' target='_blank' rel='noopener noreferrer'>
                <Image id='github-battleship' src={GitHubIcon} alt='github-logo' width='50px' height='50px' />
            </a>
            </div>
    </>
  )
}
