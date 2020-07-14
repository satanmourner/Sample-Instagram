import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar'
import Story from './components/stroy'
import Component from './components/component'
import Aside from './components/aside'

function App() {
  return (
    <Nav></Nav>
    <div className="container">
      <div className="main">
        <Story />
        <Component />
      </div>

      <div className="aside">
        <Aside />
      </div>
    </div>

  );
}

export default App;
