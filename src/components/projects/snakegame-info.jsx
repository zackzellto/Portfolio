import React from 'react'
import { Image } from 'react-bootstrap'
import JSIcon from '../../media/icons/javascript-icon.png'
import HTMLIcon from '../../media/icons/html-icon.png'
import CSSIcon from '../../media/icons/css-icon.png'
import GitHubIcon from '../../media/github-logo.png'


export default function SnakeGameInfo() {
  return (
    <>
        <div className='snake-info'>
        <div id='project-info-title'>Snake Game</div>
        <br />
        <div id='project-info-summary'>
            <div>
                The classic game of Snake.
                <br />
                The player moves the snake around the board, eating apples.
                <br />
                After eating, the snake grows 1 length in size.
                <br />
                The player loses if the snake runs into itself or the wall.
                
            </div>
        </div>
        <br />
        <div id='project-info-tech'>
                <text id='project-built-with-text'>Built with: 
                    <a href="https://www.w3schools.com/html/"> 
                        <Image src={HTMLIcon} alt='html-icon' width='40px' height='40px' />
                    </a>
                    <a href="https://www.w3schools.com/css/"> 
                        <Image src={CSSIcon} alt='css-icon' width='40px' height='40px' />
                    </a>
                    <a href="https://www.w3schools.com/js/"> 
                        <Image src={JSIcon} alt='c-sharp-logo' width='50px' height='50px' />
                    </a>
                </text>
            </div>
        <br />
        <div id='project-info-links' >
            <a href='https://github.com/zackzellto/snake-game' target='_blank' rel='noopener noreferrer'>
                <Image src={GitHubIcon} alt='github-logo' width='50px' height='50px' />
            </a>
            </div></div>
    </>
  )
}
