import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/navbar'
import Story from './components/story'
import Compo from './components/component'
import Aside from './components/aside'

function App() {
  return (
    <div>
      <Nav></Nav>
      <div className="container">

        <div className="main">
          <Story />
          <Compo />
        </div>

        <div className="aside">
          <Aside />
        </div>
      </div>
      <section>
      whole
      <p class="p-close">&times;</p>
    </section>
    </div>
  );
}

export default App;
