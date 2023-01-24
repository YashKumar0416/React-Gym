import React from 'react'
import explore from "../images/explore.jpg"

function About() {
  return (
    <div id='about'>
        <div className="about-image">
            <img src={explore} alt=""/>
        </div>
        <div className="about-text">
            <h1>LEARN MORE</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam labore optio perspiciatis quis rerum sunt totam voluptatibus veritatis iure commodi.</p>
            <button>READ MORE</button>
        </div>
    </div>
  )
}

export default About