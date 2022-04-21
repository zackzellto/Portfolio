import React from 'react'
import TypeWriter from 'typewriter-effect'

export default function LandingText() {
  return (
    <div className='word'>
        <TypeWriter
            onInit={(typewriter) => {
                typewriter
                .pauseFor(2500)
                .typeString("Hi.")
                .pauseFor(3500)
                .start();
            }}
        />  
                <TypeWriter
            onInit={(typewriter) => {
                typewriter
                .pauseFor(4500)
                .typeString("I'm Zack.")
                .pauseFor(4500)
                .start();
            }}
        /> 
                <TypeWriter
            onInit={(typewriter) => {
                typewriter
                .pauseFor(5500)
                .typeString("\na Software Engineer.")
                .start();
            }}
        /> 
    </div>
  )
}
