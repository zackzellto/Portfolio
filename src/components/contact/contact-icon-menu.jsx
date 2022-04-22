import React from 'react';
import { Image } from 'react-bootstrap';
import GitHubSVG from './github-icon.svg'
import LinkedInSVG from './linkedin-logo.svg'

export default function ContactIconMenu() {

  return (
<>
    <div id="contact-icon-menu">
    <ul id="contact-icon-ul">
      <li>
        <div>
        <a href='https://www.github.com/zackzellto' target='_blank' rel='noopener noreferrer'>
          <Image id='contact-icon-github' src={GitHubSVG} alt='githubicon'></Image>
</a></div>
      </li>
      <li id='contact-icon-linkedin'>
        <div>
        <a href='https://www.linkedin.com/in/zackzellto/' target='_blank' rel='noopener noreferrer'>
          <Image  src={LinkedInSVG} alt='linkedinicon'></Image>
</a></div>
      </li>
    </ul>
    </div>
</>
  )
}
  
