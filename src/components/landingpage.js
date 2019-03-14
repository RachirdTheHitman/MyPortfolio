import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="/assets/selfweb.png"
              alt="avatar"
              className="avatar-img"
              />

            <div className="banner-text">
              <h1>Full Stack Web Developer</h1>

            <hr/>

          <p>HTML/CSS | SemanticUI | JavaScript | React | NodeJS | Express | MongoDB</p>

        <div className="social-links">

          
          <a href="https://www.linkedin.com/in/richard-yi-zhang-3a6338142/" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>

          
          <a href="https://github.com/RachirdTheHitman" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>


          
          <a href="https://www.facebook.com/profile.php?id=100009458907958" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-facebook-square" aria-hidden="true" />
          </a>

        </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Landing;
