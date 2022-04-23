import React from 'react'
import TypeWriter from 'typewriter-effect'

export default function LandingText() {
  return (
    <div className='word'>
        <TypeWriter
            onInit={(typewriter) => {
                typewriter
                .pauseFor(1500)
                .typeString("Hi.")
                .pauseFor(1500)
                .typeString("<br />")
                .typeString("I'm Zack.")
                .pauseFor(1500)
                .typeString("<br />")
                .pauseFor(1500)
                .typeString("a Software Engineer.")
                .pauseFor(1500)
                .deleteChars(18)
                .typeString("Dad.")
                .pauseFor(1500)
                .deleteChars(4)
                .typeString("Husband.")
                .pauseFor(1500)
                .deleteChars(8)
                .typeString("gamer.")
                .pauseFor(1500)
                .deleteChars(8)
                .typeString("a Software Engineer.")
                .start();
            }}
        /> 
    </div>
  )
}
