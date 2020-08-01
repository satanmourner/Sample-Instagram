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
    this.state = {showStory: false, listImg: null, listName: null, listSrc: null};
    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);
    this.catch = this.catch.bind(this);
  }

  show = () => this.setState({showStory: true});

  hide = () => this.setState({showStory: false});

  catch = (prof, name, src) => this.setState({listImg: prof, listName: name, listSrc: src});

  render() {
    return (
      <div>
        <Nav></Nav>
        <div className="container" style={{display: this.state.showStory ? "none" : "flex"}}>

          <div className="main">
            <Story onClick={this.show} getData={this.catch} />
            <Content />
          </div>

          <div className="aside">
            <Aside />
          </div>
        </div>
        <Section clicked={this.state.showStory} onClick={this.hide} src={this.state.listImg} 
        name={this.state.listName} section={this.state.listSrc} />
      </div>
    );
  }
}

export default App;
