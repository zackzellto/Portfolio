import React from 'react'
import { Image } from 'react-bootstrap'
import CSharpLogo from '../../media/icons/c-sharp-logo.png'
import GitHubIcon from '../../media/github-logo.png'


export default function BattleshipInfo() {
  return (
    <>
    
        <h1 id='battleship-info-title'>Battleship</h1>
        <br />
        <div id='battleship-info-summary'>
            <p>
                This console version of Battleship is a shortened version of the classic game.
                <br />
                The player gives coordinates to sink a randomized enemy ship.
                
            </p>
        </div>
        <br />
        <div id='battleship-info-tech'>
                <text>Built with: 
                    <a href="https://docs.microsoft.com/en-us/dotnet/csharp/"> 
                        <Image id='battleship-csharp-logo' src={CSharpLogo} alt='c-sharp-logo' width='50px' height='50px' />
                    </a>
                </text>
            </div>
        <br />
        <div id='battleship-info-links'>
            <a href='https://github.com/zackzellto/console-battleship-game' target='_blank' rel='noopener noreferrer'>
                <Image id='github-battleship' src={GitHubIcon} alt='github-logo' width='50px' height='50px' />
            </a>
            </div>
    </>
  )
}
