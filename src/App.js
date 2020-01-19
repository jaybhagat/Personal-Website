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
          <Header className= "header-color" transparent title=<Link to = "/">home</Link> style={{color: 'white'}}>
              <Navigation>
                  <Link to="/aboutme">about me</Link>
                  <Link to="/projects">projects</Link>
                  <a href="https://drive.google.com/drive/folders/1C-XMXl4UIEV7mi4pCPGzkiBrn3-h6H_k?usp=sharing" rel="noopener noreferrer" target="_blank">chemistry resources</a>
                  <a href="https://drive.google.com/file/d/1sro7sikY1L7WThoaMNP7Q7_ze85Xe2BB/view?usp=sharing" rel="noopener noreferrer" target="_blank">resume</a>
             </Navigation>
        </Header>
        <Drawer title=<Link to = "/">home</Link>>
            <Navigation>
              <Link to="/aboutme">about me</Link>
              <Link to="/projects">projects</Link>
              <a href="https://drive.google.com/drive/folders/1C-XMXl4UIEV7mi4pCPGzkiBrn3-h6H_k?usp=sharing" rel="noopener noreferrer" target="_blank">chemistry resources</a>
              <a href="https://drive.google.com/file/d/18NUmMy91Ict1grz2NT7oKeWO-owk5a4r/view?usp=sharing" rel="noopener noreferrer" target="_blank">resume</a>
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
