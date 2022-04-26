import React from 'react'
import { Image } from 'react-bootstrap'
import ReactIcon from '../../media/icons/react-icon.png'
import HTMLIcon from '../../media/icons/html-icon.png'
import CSSIcon from '../../media/icons/css-icon.png'
import BootstrapIcon from '../../media/icons/bootstrap-icon.png'
import GitHubIcon from '../../media/github-logo.png'


export default function ExpenseTrackerInfo() {
  return (
    <>
    
        <div id='project-info-title'>Expense Tracker</div>
        <br />
        <div id='project-info-summary'>
            <div>
                This app allows you to track your expenses and keep track of your budget.
                <br />
                You can add and delete expenses.
                <br />
                This was the first project I built using React.

                
            </div>
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
            <a href='https://github.com/zackzellto/new-react-expense-tracker' target='_blank' rel='noopener noreferrer'>
                <Image src={GitHubIcon} alt='github-logo' width='50px' height='50px' />
            </a>
            </div>
    </>
  )
}
