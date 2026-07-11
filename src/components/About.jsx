import React from 'react';

function About() {
  return (
    <section id="about" className="about-section reveal">
      <div className="section-container">
        <div className="about-grid">
          <div className="about-left">
            <h2 className="heading">About Me</h2>
            <div className="line"></div>
            <p className="content">
              I'm a full-stack developer studying Computer Science & Engineering at Shri Mata Vaishno Devi
              University. I love building web applications that solve real problems. I focus on writing
              clean, maintainable code and optimizing rendering pipelines to deliver smooth user
              experiences.
            </p>
            <br />
            <p className="content">
              From designing secure, structured backend APIs and database schemas to building visual
              front-ends using React, I enjoy exploring the full application lifecycle.
            </p>
          </div>
          <div className="about-right">
            <h2 className="heading">Core Proficiencies</h2>
            <div className="line"></div>
            <div className="proficiencies-container">
              <div className="proficiency-item">
                <div className="proficiency-info">
                  <span>React & Frontend Engineering</span>
                  <span>88%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-bar" style={{ width: '88%' }}></div>
                </div>
              </div>
              <div className="proficiency-item">
                <div className="proficiency-info">
                  <span>Node.js & Express APIs</span>
                  <span>85%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
              <div className="proficiency-item">
                <div className="proficiency-info">
                  <span>MongoDB & Databases</span>
                  <span>80%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-bar" style={{ width: '80%' }}></div>
                </div>
              </div>
              <div className="proficiency-item">
                <div className="proficiency-info">
                  <span>Data Structures in Java</span>
                  <span>85%</span>
                </div>
                <div className="progress-track">
                  <div className="progress-bar" style={{ width: '85%' }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Matrix Sub-Grid */}
        <div className="skills-matrix reveal">
          <h3 className="subheading">Technologies I Work With</h3>
          <div className="grid-container">
            <div className="item">
              <img src="https://simpleicons.org/icons/c.svg" alt="C icon" />
              <h3>C</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/python.svg" alt="Python icon" />
              <h3>Python</h3>
            </div>
            <div className="item">
              <img src="https://img.icons8.com/?size=100&id=2572&format=png" alt="Java icon" />
              <h3>Java</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/html5.svg" alt="HTML5 icon" />
              <h3>HTML5</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/css.svg" alt="CSS3 icon" />
              <h3>CSS3</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/javascript.svg" alt="Javascript icon" />
              <h3>Javascript</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/mongodb.svg" alt="MongoDB icon" />
              <h3>MongoDB</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/express.svg" alt="Express.js icon" />
              <h3>Express.js</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/react.svg" alt="React icon" />
              <h3>React</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/nodedotjs.svg" alt="Node.js icon" />
              <h3>Node.js</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/nextdotjs.svg" alt="Next.js icon" />
              <h3>Next.js</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/socketdotio.svg" alt="Socket.io icon" />
              <h3>Socket.io</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/typescript.svg" alt="Typescript icon" />
              <h3>Typescript</h3>
            </div>
            <div className="item">
              <img src="https://simpleicons.org/icons/git.svg" alt="Git icon" />
              <h3>Git & Github</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
