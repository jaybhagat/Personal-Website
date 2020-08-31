import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';


class App extends Component {
  render() {
    return (
      <div>
      <Layout>
          <Header className= "header-color" transparent title="jay bhagat" style={{color: 'white'}}>
              <Navigation>
                  <Link to="/aboutme">about me</Link>
                  <Link to="/projects">projects</Link>
                  <a href="https://drive.google.com/drive/folders/1C-XMXl4UIEV7mi4pCPGzkiBrn3-h6H_k?usp=sharing" rel="noopener noreferrer" target="_blank">chemistry resources</a>
                  <a href="JayBhagatResume.pdf" rel="noopener noreferrer" target="_blank">resume</a>
             </Navigation>
        </Header>
        <Drawer title="jay bhagat">
            <Navigation>
              <Link to="/">home</Link>
              <Link to="/aboutme">about me</Link>
              <Link to="/projects">projects</Link>
              <a href="https://drive.google.com/drive/folders/1C-XMXl4UIEV7mi4pCPGzkiBrn3-h6H_k?usp=sharing" rel="noopener noreferrer" target="_blank">chemistry resources</a>
              <a href="JayBhagatResume.pdf" rel="noopener noreferrer" target="_blank">resume</a>
            </Navigation>
        </Drawer>
        <Content>
          <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
