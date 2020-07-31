import React, { Component } from 'react';

export default class Aside extends React.Component {
  constructor(props) {
    super(props);
    this.follow = this.follow.bind(this);
  }

  follow = (e) => {
    (e.target.textContent == "follow") ? e.target.textContent = "followed" : e.target.textContent = "follow";
  }

  render () {
    return (
      <div className="left">
        <div className="up">
          <img className="pic-aside" src="./images/avatar.png" />
          <div className="idName">
            <a href="#">satanmourner</a>
            <p>sanaz mahmoudi</p>
          </div>
        </div>
        <div className="center">
          <div className="center-section-row">
            <div className="center-section">
              <span>Suggestion for you</span>
            </div>
            <a href="#" style={{color: 'white', textDecoration: 'none'}}>see all</a>
          </div>
          <div className="center-section-row">
            <div className="center-section">
              <img className="pro-story" src="./images/avatar-other.jpeg" />
              <div className="idName">
                <a href="#">some id</a>
                <p>some name</p>
              </div>
            </div>
            <a href="#" onClick={this.follow}>follow</a>
          </div>
          <div className="center-section-row">
            <div className="center-section">
              <img className="pro-story" src="./images/avatar-other2.jpg" />
              <div className="idName">
                <a href="#">some id</a>
                <p>some name</p>
              </div>
            </div>
            <a href="#" onClick={this.follow}>follow</a>
          </div>
          <div className="center-section-row">
            <div className="center-section">
              <img className="pro-story" src="./images/avatar-other.jpeg" />
              <div className="idName">
                <a href="#">some id</a>
                <p>some name</p>
              </div>
            </div>
            <a href="#" onClick={this.follow}>follow</a>
          </div>
          <div className="center-section-row">
            <div className="center-section">
              <img className="pro-story" src="./images/avatar-other2.jpg" />
              <div className="idName">
                <a href="#">some id</a>
                <p>some name</p>
              </div>
            </div>
            <a href="#" onClick={this.follow}>follow</a>
          </div>
          <div className="center-section-row">
            <div className="center-section">
              <img className="pro-story" src="./images/avatar-other.jpeg" />
              <div className="idName">
                <a href="#">some id</a>
                <p>some name</p>
              </div>
            </div>
            <a href="#" onClick={this.follow}>follow</a>
          </div>
        </div>
        <div className="down">
          <div className="aside-link">
            <a href="#">About .</a>
            <a href="#"> Help .</a>
            <a href="#"> Press .</a>
            <a href="#"> API .</a>
            <a href="#"> Jobs .</a>
            <a href="#"> Privacy .</a>
            <a href="#"> Terms .</a>
            <a href="#"> Locations .</a>
            <a href="#"> Top Accounts .</a>
            <a href="#"> Hashtags .</a>
            <a href="#"> Languages .</a>
          </div>
          <p>my instagram by sanaz</p>
        </div>
      </div>
    );
  }
}