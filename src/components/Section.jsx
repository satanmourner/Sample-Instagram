import React, { Component } from 'react';

export default class Section extends React.Component {
  render() {
    return (
      <div>
        <div className="more-section">
          <div className="more-link borderUp">
            <a href="mailto: mahmoudi.sanaz59@gmail.com">Report inappropriate</a>
          </div>
          <hr />
          <div className="more-link borderDown cancle">
            <a href="#">Cancle</a>
          </div>
        </div>
        <div className="body-story">
          <div className="header-story">
            <div className="contain-img">
              <img className="pro-story" src="./images/avatar.png" />
              <div className="story-text">
                <a href="#" title="name">id no.1</a>
              </div>
              <p id="time">thh</p>
            </div>
            <div className="more">
              ...
            </div>
          </div>
          <div className="hr-story">
            <hr />
          </div>
          <div className="main-story">
            <div className="left-side">
              <div className="arrow-story">
                <i>&lt;</i>
              </div>
            </div>
            <img className="story" src="./images/WALL3.jpeg" />
            <div className="message">
              <div className="message-container">
                <textarea placeholder="Send message ..." className="input-message" onKeyUp="resizeText(this)" defaultValue={""} />
                <input type="submit" defaultValue="Send" />
              </div>
              <i className="far fa-paper-plane" />
            </div>
            <div className="right-side">
              <div className="close-story">
                ×
              </div>
              <div className="arrow-story">
                <i>&gt;</i>
              </div>
            </div>
          </div>
          <div className="react-emojies">
            <p>Quick Reactions</p>
            <div className="emojies-container">
              <i className="far fa-grin-squint-tears" />
              <i className="far fa-surprise" />
              <i className="far fa-grin-hearts" />
              <i className="far fa-sad-tear" />
              <i className="fas fa-hand-middle-finger" />
              <i className="fas fa-fire" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}