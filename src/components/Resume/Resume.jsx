import React, { useState } from 'react';
import './Resume.css';

function Resume() {
    return (
        <>
        <div className="resume">
            <div className="resumeContainer">
            <h1 className="name">Shaina Earle</h1>
            <h3 className="description"><a className="form" href="https://docs.google.com/document/d/1KpbiY8CMJxIem67jlpzQPz8BIy5ZasHGwAW7OyL8veM/">Download Resume</a></h3>
        </div>

        <div className="resumeContainer">
            <p className="paragraph">
            I'm a Software Engineer in the Metropolitan area with a background of supporting multi-channel digital marketing efforts. My commitment to excellence and continuous learning has granted me opportunities to work with companies as large as the NBA. My grit and passion to learn more is what motivates me daily.
            </p>

            <h3 className="label">SKILLS</h3>
            <p className="paragraph">JavaScript, React.js, Vanilla Javascript, JQuery, HTML5, CSS3, SCSS, Bootstrap, Styled-Components, SQLite, MySQL, Heroku, PostgreSQL, Postman, Express, Node.js, MongoDB, Mongoose, Git, GitHub, Microsoft Office(Word, Excel, PowerPoint, etc.)</p>

            <h3 className="label">PROJECTS</h3>
            <h4 className="resumetitle">(Wedding Website)</h4>
            <ul>
                <li>Utilized React.js components to create different pages and layouts for my Wedding Page. Some pages are informational while others are interactive for the user. </li>
                <li>Made RESTful API fetch calls to Ruby On Rails backend handling all create, read, update and delete (CRUD) functionality and tested all backend routes using Postman.</li>
                <li>Styled project using HTML and CSS3. Used flexbox and grid to help with formatting.</li>
                <li>Used Ruby on Rails to create Schemas</li>
            </ul>

            <h4 className="resumetitle">(Recipe Application)</h4>
            <ul>
                <li>Created a recipe application making fetch calls to the Edamam API, allowing users to search any type of recipe. </li>
                <li>Used React.js to create the front-end and made several components for the page layout.</li>
                <li>Created application with a mobile-first approach and styled using Styled-Components and CSS3 with grid layouts.</li>
                <li>Made frequent commits using Git control throughout the production of the application.</li>
            </ul>

            <h3 className="label">PROFESSIONAL EXPERIENCE</h3>
            <h4 className="resumetitle">National Basketball Association,  Game Review (Contract)</h4>
            <ul>
                <li>Daily review of NBA, WNBA and G-League games, and had a focus on officiating</li>
                <li>Provided performance reviews from each official being observed</li>
                <li>Continuous collection of play types for potential rule interpretations and changes</li>
                <li>Researched a numerous amount of ways to redefine a traveling violation within the NBA guidelines</li>
            </ul>

            <h4 className="resumetitle">National Basketball Association, Broadcast Scheduler (Contract)</h4>
            <ul>
                <li>Maintained GSS (Scheduling Software)</li>
                <li>Collected and consolidated data from 30 team arenas and added into respective team’s portal.</li>
                <li>Assisted on making 2018-2019, 2019-2020 NBA Regular Season and Playoff Schedule</li>
                <li>Created the 2019-2020 Virtual Reality Schedule</li>
            </ul>

            <h4 className="resumetitle">Lixil Water Technologies,  Data Content Analyst	</h4>
            <ul>
                <li>Collected, audited and entered data to support multi-channel digital marketing efforts.</li>
                <li>Validated and entered data to allow launch of new Grohe website</li>
                <li>Collected , audited, reconciled and entered data from multiple systems into content systems (Hybris; Salsify)</li>
                <li>Worked with internal and external teams to identify data discrepancies and correct them</li>
                <li>Supported data migration from existing systems to new PIM system, according to predefined rules</li>
                <li>Explored competitors and customer data from the web for the creation of templates and content opportunities.</li>
                <li>Worked within IDM and Edgenet to create and correct new and existing products on their sites.</li>
            </ul>

            <h4 className="resumetitle">Education</h4>
         
                <h3 className="schools">General Assembly</h3>
                <p className="course">Software Engineer Immersive</p>
                <br />
                <h3 className="schools">Quinnipiac University</h3>
                <p className="course">BS - Computer Information Systems</p>
        </div>
        </div>
        </>
    )
}

export default Resume
