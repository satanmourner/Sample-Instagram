import React, { Component } from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};
    this.changeValue = this.changeValue.bind(this);
  }

  changeValue(event) {
    this.setState({value: event.target.value});
  }

  render() {
    return (
      <nav>
        <div id="logo"><h1 id="logo-style">My Instagram</h1></div>
        <div id="seacrh">
          <div className="input-container">
            <img className="search-logo" src="./images/search-logo.png" />
            <input className="input-text" type="text" placeholder="Search" />
            <span className="close-logo">×</span>
          </div>
        </div>
        <div className="right">
          <i className="fa  fa-home" />
          <i className="far fa-paper-plane" />
          <i className="far fa-compass" />
          <i className="far fa-heart" />
          <img className="profile" src="./images/avatar.png" />
        </div>
      </nav>
    );
  }
}