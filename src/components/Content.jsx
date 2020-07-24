import React, { Component } from 'react';

export default class Content extends React.Component {
  render () {
    return (
      <div className="content">
        <div className="header-content-row">
          <div className="header-content">
            <div className="contain-pic-content">
              <img className="pro-story" src="./images/avatar-other2.jpg" />
            </div>
            <div className="idName">
              <a href="#">some id</a>
            </div>
          </div>
          <div className="more">...</div>
        </div>
        <div className="more-section">
          <div className="more-link borderUp">
            <a href="mailto: mahmoudi.sanaz59@gmail.com">Report inappropriate</a>
          </div>
          <hr />
          <div className="more-link borderDown cancle">
            <a href="#">Cancle</a>
          </div>
        </div>
        <div className="main-post">
          <img src="./images/WALL3.jpeg" />
        </div>
        <div className="like-cm-save">
          <div className="right" style={{justifyContent: 'flex-start'}}>
            <i className="far fa-heart" />
            <i className="far fa-comment" />
            <i className="far fa-paper-plane" />
          </div>
          <div className="center-content">
            if slide
          </div>
          <div className="left-content">
            <i className="far fa-bookmark" />
          </div>
        </div>
        <div className="liked">
          number liked
        </div>
        <div className="container-content">
          <div className="caption">
          </div>
          <div className="comment">
            comment
          </div>
          <div className="time-post">
            time posted
          </div>
        </div>
        <hr />
        <div className="ur-comment">
          <textarea className="comment-message" placeholder="Add a comment..." onKeyUp="resizeText(this)" defaultValue={""} />
          <input type="submit" defaultValue="Post" />
        </div>
      </div>
    );
  }
}