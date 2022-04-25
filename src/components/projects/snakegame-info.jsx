import React from 'react'
import { Image } from 'react-bootstrap'
import JSIcon from '../../media/icons/javascript-icon.png'
import HTMLIcon from '../../media/icons/html-icon.png'
import CSSIcon from '../../media/icons/css-icon.png'
import GitHubIcon from '../../media/github-logo.png'


export default function SnakeGameInfo() {
  return (
    <>
    
        <h1 id='project-info-title'>Snake Game</h1>
        <br />
        <div id='project-info-summary'>
            <p>
                The classic game of Snake.
                <br />
                The player moves the snake around the board, eating apples.
                <br />
                After eating, the snake grows 1 length in size.
                <br />
                The player loses if the snake runs into itself or the wall.
                
            </p>
        </div>
        <br />
        <div id='project-info-tech'>
                <text id='project-built-with-text'>Built with: 
                    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/"> 
                        <Image src={HTMLIcon} alt='c-sharp-logo' width='50px' height='50px' />
                    </a>
                    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/"> 
                        <Image  src={CSSIcon} alt='c-sharp-logo' width='50px' height='50px' />
                    </a>
                    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/"> 
                        <Image src={JSIcon} alt='c-sharp-logo' width='50px' height='50px' />
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
