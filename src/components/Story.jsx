import React, { Component } from 'react';

var count = 1;
var temp = 0;
var showLeftBool = true;

export default class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showLeft: false, trans: 0 };
    this.transfromShow = this.transfromShow.bind(this);
    this.transformHide = this.transformHide.bind(this);
  }

  transfromShow() {
    showLeftBool = true;
    const newTrans = "translateX(" + (-270 * count) + "px) ";
    count += 1;
    temp = count;
    this.setState({ 
      showLeft: true, 
      trans: newTrans
    });
  }

  transformHide() {
    const newTrans = "translateX(" + (-270 * (temp - 1) + 270) + "px) ";
    count -= 1
    temp = count;
    if(temp === 1) { showLeftBool = false }
    console.log(showLeftBool);
    this.setState ({
      showLeft: showLeftBool,
      trans: newTrans 
    })
  }

  render() {
    return (
      <div className="stories">
        <div className="all-stories" style={{transform: this.state.trans}} >
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar.png" />
            </div>
            <div className="story-text">
              <a href="#">id no.1</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar-other.jpeg" />
            </div>
            <div className="story-text">
              <a href="#">id no.2</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar-other2.jpg" />
            </div>
            <div className="story-text">
              <a href="#">id no.3</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar-other.jpeg" />
            </div>
            <div className="story-text">
              <a href="#">id no.4</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar-other2.jpg" />
            </div>
            <div className="story-text">
              <a href="#">id no.5</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar-other.jpeg" />
            </div>
            <div className="story-text">
              <a href="#">id no.6</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar-other2.jpg" />
            </div>
            <div className="story-text">
              <a href="#">id no.7</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/prof.jpg" />
            </div>
            <div className="story-text">
              <a href="#">id no.8</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar-other2.jpg" />
            </div>
            <div className="story-text">
              <a href="#">id no.9</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar-other.jpeg" />
            </div>
            <div className="story-text">
              <a href="#">id no.10</a>
            </div>
          </div>
          <div className="contain-story">
            <div className="contain-pic">
              <img className="story-pic" src="./images/avatar-other2.jpg" />
            </div>
            <div className="story-text">
              <a href="#">id no.11</a>
            </div>
          </div>
        </div>
        <div className="arrows">
          <div className="arrow-left" style={{display: this.state.showLeft ? "block" : "none"}} onClick={this.transformHide} >
            <i>&lt;</i>
          </div>
          <div className="arrow-right" onClick={this.transfromShow} >
            <i>&gt;</i>
          </div>
        </div>
      </div>
    );
  }
}