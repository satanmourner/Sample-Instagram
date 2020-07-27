import React, { Component } from 'react';
import './App.css';
import Nav from './components/Navbar'
import Story from './components/Story'
import Content from './components/Content'
import Aside from './components/Aside'
import Section from './components/Section'

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="container">

        <div className="main">
          <Story />
          <Content />
        </div>

        <div className="aside">
          <Aside />
        </div>
      </div>
      <Section />
    </div>
  );
}

export default App;
