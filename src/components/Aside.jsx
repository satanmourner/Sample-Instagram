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

          {userSuggestion.map(user => (
            <div className="center-section-row">
              <div className="center-section">
                <img className="pro-story" src={user.imgSrc} />
                <div className="idName">
                  <a href="#">{user.id}</a>
                  <p>{user.name}</p>
                </div>
              </div>
              <a href="#" onClick={this.follow}>follow</a>
            </div>
          ))}
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

const userSuggestion = [
  {id: "id 1", name: "user 1", imgSrc: "./images/avatar-other.jpeg"},
  {id: "id 2", name: "user 2", imgSrc: "./images/avatar-other2.jpg"},
  {id: "id 3", name: "user 3", imgSrc: "./images/avatar-other.jpeg"},
  {id: "id 4", name: "user 4", imgSrc: "./images/avatar-other2.jpg"},
  {id: "id 5", name: "user 5", imgSrc: "./images/avatar-other.jpeg"}
]