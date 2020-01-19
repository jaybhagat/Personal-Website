import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardActions, Button, CardMenu, IconButton, CardText } from 'react-mdl';

class Projects extends Component {
  render() {
    return(
      <div className= "landing-grid" style={{width: '100%', margin: 'auto'}}>
        <Grid>
          <Cell col={12}>
            <div className="projects-grid">

              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#fff', height: '200px', background: 'url(atari-breakout.png) center/cover'}}>
                Brick Breaker
                </CardTitle>
                <CardText>
                  This is a revamped version of the addictive game "Atari Breakout" that was wildly popular in the past. It demonstrates my understanding of Object-Orientated Programming using Java.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/jaybhagat/brick-breaker" rel="noopener noreferrer" target="_blank">github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton namme="share" />
                </CardMenu>
              </Card>

              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '200px', background: 'url(epoch-logo.png) center/cover'}}>
                The EPOCH App
                </CardTitle>
                <CardText>
                  The EPOCH App is a Waterloo-based start-up which aims to bring companies closer to their communities through volunteering. I interned at this company and learnt about React.js and software development in general.
                </CardText>
                <CardActions border>
                  <Button colored><a href="www.epochapp.com" rel="noopener noreferrer" target="_blank">link</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton namme="share" />
                </CardMenu>
              </Card>

              <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
                <CardTitle style={{color: '#000', height: '200px', background: 'url(personal-website.png) center/cover'}}>
                Personal Website
                </CardTitle>
                <CardText>
                  This website has been created using React.js to give it a modern look. It demonstrates my web development abilities using JavaScript, HTML and CSS.
                </CardText>
                <CardActions border>
                  <Button colored><a href="https://github.com/jaybhagat/Personal-Website" rel="noopener noreferrer" target="_blank">github</a></Button>
                </CardActions>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton namme="share" />
                </CardMenu>
              </Card>

            </div>
          </Cell>
        </Grid>
      </div>

    )
  }
}

export default Projects;
