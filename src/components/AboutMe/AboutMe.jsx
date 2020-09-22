import React from 'react'
import './AboutMe.css'
import ContactForm from './ContactForm';

function AboutMe() {
    return (
        <>

        <div className="social">
            <a href="https://www.linkedin.com/in/shaina-earle-7b8bb6b0/">
                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/LinkedIn-512.png" 
                alt="linkedIn" className="smedia"></img>
            </a>

            <a href="https://codepen.io/dashboard/">
                <img src="https://i.imgur.com/wot69cI.png" 
                alt="codepen" className="smedia"></img>
            </a> 

            <a href="https://github.com/searle927">
                <img src="https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Github-512.png" 
                alt="github" className="smedia"></img>
            </a><br />        
        </div>

        <div className="about">
            <h1>About Me</h1>
            <p className="aboutMe">
                My name is Shaina Earle. I'm becoming a Software Engineer in the Metropolitan area with a background of supporting multi-channel digital marketing efforts. My commitment to excellence and continuous learning has granted me opportunities to work with companies as large as the NBA.
            </p><br /><br /><br />

            <div className="skills">
                <div className="container1">
                    <img className="icon" src="https://i.imgur.com/IlT2yAR.png" alt=""></img>
                    <h2 className="title">Front End</h2>
                    <ul className="dbs">
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>JavaScript</li>
                        <li>JQuery</li>
                        <li>React</li>
                    </ul>
                </div>

                <div className="container2">
                    <img className="icon" src="https://i.imgur.com/c4dfZLZ.png" alt=""></img>
                    <h2 className="title">Back End</h2>
                    <ul className="dbs">
                        <li>Express</li>
                        <li>MongoDB</li>
                        <li>Ruby on Rails</li>
                        <li>PostgresSQL</li>
                    </ul>
                </div>

                <div className="container3">
                <img className="icon" src="https://i.imgur.com/y7Gor7y.png" alt=""></img>
                <h2 className="title">DEV TOOLS</h2>
                <ul className="dbs">
                  <li>Bootstrap</li>
                  <li>BRM</li>
                  <li>CodePen</li>
                  <li>Git/GitHub</li>
                  <li>Agile Methodology</li>
                </ul>
              </div>
            </div>  
        </div>
<br /><br /><br />
        <div className="portfolio">
            <h1>Check out my portfolio!</h1><br />
            <div className="pcontainer">
                <a href="http://fragile-shirt.surge.sh/details"><img src="https://i.imgur.com/JILTucy.png" alt="" className="project"></img>
                </a>
            
                <a href="https://jovial-wing-ca574a.netlify.app/"><img src="https://i.imgur.com/y2g1n8j.png" alt="" className="project"></img>
                </a>
            
                <a href="https://codepen.io/Shai_E1/pen/MWaMPWy"><img src="https://i.imgur.com/LMX7tEf.png?1" alt="" className="project"></img>
                </a>
            
                <a href="https://codepen.io/Shai_E1/pen/RwrPvZo"><img src="https://i.imgur.com/LUlJqGC.png" alt="" className="project"></img>
                </a>
           
                <a href="https://codepen.io/Shai_E1/pen/xxwyJdJ"><img src="https://i.imgur.com/7JuXlib.png" alt="" className="project"></img>
                </a>
            
                <a href="https://codepen.io/Shai_E1/pen/yLYWrgB"><img src="https://i.imgur.com/P90zIPw.png" alt="" className="project"></img>
                </a>    
            </div>
        </div>
        <br /><br /><br />
        <div className="contactContainer">
        <h2 className="contact">Contact Me</h2>
        <ContactForm />

        </div>

        </>
    )
}
export default AboutMe