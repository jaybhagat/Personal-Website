import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="logo.png"
              alt="logo"
              className="logo-img"
              />
            <div className="banner-text">
              <h1>hi, i'm jay.</h1>

              <hr/>

              <p>welcome to my journey as a developer and life-long learner</p>
              <div className="social-links">

              {/* LinkedIn Profile */}
                <a href="https://www.linkedin.com/in/jay-bhagat-575117194/" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

              {/* GitHub Profile */}
                <a href="https://github.com/jaybhagat" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

             {/* Email Profile */}
                <a href="mailto:jaybhagat0515@gmail.com" rel="noopener noreferrer" target="_blank">
                  <i className="fa fa-envelope" aria-hidden="true" />
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
