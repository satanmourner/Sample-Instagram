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
  <ul id="right">
    <li><i className="fa fa-home" /></li>
    <li><i className="fa fa-envelope" /></li>
    <li><i className="fa fa-bandcamp" /></li>
    <li><i className="fa fa-heart" /></li>
    <li><img className="profile" src="./images/avatar.png" /></li>
  </ul>
</nav>

    );
  }
}