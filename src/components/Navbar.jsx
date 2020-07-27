import React, { Component } from 'react';

export default class Nav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', showSpan: false, widthText: ""};
    this.changeValue = this.changeValue.bind(this);
    this.onClickDiv = this.onClickDiv.bind(this);
    this.onClickClose = this.onClickClose.bind(this);
    this.createRef = React.createRef(); /*impo*/
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  changeValue = (event) => this.setState({value: event.target.value});

  onClickDiv = () => this.setState({showSpan: true, widthText: 162}); 

  onClickClose = (event) => {
    event.stopPropagation(); /*impo*/
    this.setState({showSpan: false, widthText: 63.63});
  }

  componentDidMount = () => document.addEventListener('mousedown', this.handleClickOutside);

  componentWillUnmount = () => document.removeEventListener('mousedown', this.handleClickOutside);

  handleClickOutside  = (event) => {
    if (this.createRef && !this.createRef.current.contains(event.target)) {
      this.setState({showSpan: false, widthText: 63.63});
    }
  }

  render() {
    return (
      <nav>
        <div id="logo"><h1 id="logo-style">My Instagram</h1></div>
        <div id="seacrh">
          <div className="input-container" onClick={this.onClickDiv} ref={this.createRef} >
            <img className="search-logo" src="./images/search-logo.png" />
            <input className="input-text" type="text" placeholder="Search" value={this.state.value} 
              onChange={this.changeValue} style={{width: this.state.widthText ? this.state.widthText : ""}} />
            <span className="close-logo" onClick={this.onClickClose}
            style={{display: this.state.showSpan ? "block" : "none"}} >×</span>
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