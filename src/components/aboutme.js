import React, { Component } from 'react';
import { Grid, Cell, List, ListItem } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className="about-body">
        <Grid className="about-grid">
          <Cell col={6}>
            <h2 className="about-title">jay bhagat.</h2>
            <img
            src="frontpic.png"
            alt="frontpic"
            style={{height: '275px'}}
            />
            <p style={{width: '75%', margin: 'auto', paddingTop: '1em', fontFamily: 'Open Sans', color: 'dark grey'}}>
            I am currently a Computer Science student at the University of Waterloo.
            I want to explore my passions for teaching and technology, but more specifically,
            about their connections. To dwell into teaching, I have made some resources for IB DP HL Chemistry which can be found from the nagivation bar!
            Apart from this, I love to research about the wonders of our world, spend time with friends, and learn!</p>
          </Cell>

          <Cell col={6}>
            <h3>skills</h3>
            <hr/>

            <div className="skills-list">
              <List>
              <ListItem style={{width: '100%', margin: 'auto', paddingTop: '1em', fontFamily: 'Open Sans', color: 'white'}}>Languages: Java, Racket, C, JavaScript, HTML/CSS</ListItem>
              <ListItem style={{width: '100%', margin: 'auto', paddingTop: '1em', fontFamily: 'Open Sans', color: 'white'}}>Technologies: React.js, Node.js, Git, Latex, PostgreSQL</ListItem>
              </List>
            </div>

            <h3>achievments</h3>
            <hr/>

            <div className="achievments-list">
              <List>
              <ListItem style={{width: '100%', margin: 'auto', paddingTop: '1em', fontFamily: 'Open Sans', color: 'white'}}>Top 2% in the World for Chem 13 News Contest (2019)</ListItem>
              <ListItem style={{width: '100%', margin: 'auto', paddingTop: '1em', fontFamily: 'Open Sans', color: 'white'}}>Ontario Scholar; 99.2% University Admissions Average (2019)</ListItem>
              <ListItem style={{width: '100%', margin: 'auto', paddingTop: '1em', fontFamily: 'Open Sans', color: 'white'}}>University of Waterloo President's Scholarship (2019)</ListItem>
              <ListItem style={{width: '100%', margin: 'auto', paddingTop: '1em', fontFamily: 'Open Sans', color: 'white'}}>CPL Academic Scholarship Winner (2019)</ListItem>
              <ListItem style={{width: '100%', margin: 'auto', paddingTop: '1em', fontFamily: 'Open Sans', color: 'white'}}>NSERC Undergraduate Student Research Award (2020)</ListItem>
              <ListItem style={{width: '100%', margin: 'auto', paddingTop: '1em', fontFamily: 'Open Sans', color: 'white'}}>University of Waterloo Math Faculty Dean's List (89.7% CAV)</ListItem>
              </List>
            </div>

          </Cell>
        </Grid>
      </div>
    )
  }
}

export default About;
