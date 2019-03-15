import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";
import Skills from "./skills";

class Resume extends Component {
  render() {
    return (
      <div>
        <Grid>
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src="./assets/galaxymeweb.png"
                alt="avatar"
                style={{ height: "200px", marginRight: "10em" }}
              />
            </div>

            <h2 style={{ paddingTop: "10px" }}>Richard Zhang</h2>
            <h4 style={{ color: "grey" }}>Programmer</h4>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <p>
              Familiar with data collection, analysis and management. Works well
              under pressure and consistently meets deadlines and targets while
              delivering high quality work. Interested in React ecosystem,
              Redux, AngularJs, Ionic and still keep diving into different
              aspects about front end. Promoting object-oriented approaches to
              real-time software development. Analytical and detail-oriented.
              Applying various machine learning and data mining techniques to
              practical use. Experiencing building Snapchat app on an android
              device. Experience solving several AI tasks and implementing
              specific strategies on Pacman Game.
            </p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
            <h5>Address</h5>
            <p>Melbourne CBD, 3000</p>
            <h5>Phone</h5>
            <p>0452-537-125</p>
            <h5>Email</h5>
            <p>hyacinthzy1@gmail.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{ borderTop: "3px solid #833fb2", width: "50%" }} />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>

            <Education
              startYear={2015}
              endYear={2016}
              schoolName="Univerisity of Melbourne"
              schoolDescription="Master of Information Technology"
            />

            <Education
              startYear={2008}
              endYear={2012}
              schoolName="Northeastern Univerisity"
              schoolDescription="Bachelor of Science"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />

            <h2>Experience</h2>

            <Experience
              startYear={2017.9}
              endYear={2018.3}
              jobName="Web Developer"
              jobDescription="Working on learning management system called NAIT(published on play store)"
            />

            <Experience
              startYear={2012.1}
              endYear={2014.1}
              jobName="Business analysis"
              jobDescription="Customer requirement analysis"
            />
            <hr style={{ borderTop: "3px solid #e22947" }} />
            <h2>Skills</h2>
            <Skills skill="javascript" progress={100} />
            <Skills skill="HTML/CSS" progress={80} />
            <Skills skill="NodeJS" progress={50} />
            <Skills skill="React" progress={80} />
            <Skills skill="Photoshop" progress={80} />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
