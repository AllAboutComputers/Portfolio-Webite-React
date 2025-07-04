import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/KunaalAiImage1.jpg'

const About = () => {
  return (
    <div id='about' className='about'>
        <div className="about-title">
            <h1>About Me</h1>
            <img src= {theme_pattern} alt="Theme Pattern" />
        </div>
        <div className="about-section">
            <div className="about-left">
                <img src= {profile_img}  alt="Profile" />
            </div>
            <div className="about-right">
                <div className="about-para">
                    <h2>Hi, I'm Kunaal Solanki</h2>
                    <p>
                    I'm a Full Stack Developer with a passion for building dynamic, user-friendly, and scalable web applications. With hands-on experience in both front-end and back-end development, I enjoy turning complex problems into clean, efficient solutions.
                    </p>
                    <p>
                    When I’m not coding, you’ll find me exploring the latest in tech, contributing to open-source projects, or learning new frameworks and tools. I’m always open to collaboration, innovation, and pushing the boundaries of what’s possible in web development.
                    
                    </p>
                    <p>Let’s build something great together.</p>
                </div>
                <div className="about-skills">
                    <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>    
                    <div className="about-skill"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill"><p>Java Script</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill"><p>Java</p><hr style={{width:"90%"}}/></div>
                    
                </div>

                <div className="about-skills-mobile">
                    <div className="about-skill-mobile"><p>HTML & CSS</p><hr style={{width:"70%"}}/></div>    
                    <div className="about-skill-mobile"><p>React JS</p><hr style={{width:"60%"}}/></div>
                    <div className="about-skill-mobile"><p>Java Script</p><hr style={{width:"50%"}}/></div>
                    <div className="about-skill-mobile"><p>Java</p><hr style={{width:"90%"}}/></div>
                    
                </div>
            </div>
        </div>
        <div className="about-achievements">
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Projects Built</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>6+</h1>
                <p>Certifications Earned</p>
            </div>
            <hr/>
            <div className="about-achievement">
                <h1>10+</h1>
                <p>Hackathons Participated</p>
            </div>
        </div>
    </div>
  )
}

export default About