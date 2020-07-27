import React, { Component } from 'react';
import './App.css';
import Nav from './components/Navbar'
import Story from './components/Story'
import Content from './components/Content'
import Aside from './components/Aside'
import Section from './components/Section'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showStory: false};
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
  }

  show() {
    this.setState({showStory: true});
    console.log(this.state.showStory);
  }

  hide() {
    this.setState({showStory: false});
  }
  
  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="container" style={{display: this.state.showStory ? "none" : "flex"}}>

          <div className="main">
            <Story onClick={this.show}/>
            <Content />
          </div>

          <div className="aside">
            <Aside />
          </div>
        </div>
        <Section clicked={this.state.showStory} onClick={this.hide} />
      </div>
    );
  }
}

export default App;
