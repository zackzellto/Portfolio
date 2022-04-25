import React from 'react'
import TypeWriter from 'typewriter-effect'

export default function LandingText() {
  return (

    
    <div id='landing-text2'>
        <TypeWriter
            onInit={(typewriter) => {
                typewriter
                .pauseFor(1500)
                .typeString("Zack Zellto")
                .start();
            }}
        /> 
    </div>

  )
}
