import React, { Component } from 'react';

var newOver = "";
var comment = "";

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setHeight : false, over: false, value: '', submitted: false, input: [] };
    this.resizeText = this.resizeText.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.handleSub = this.handleSub.bind(this);
  }

  resizeText(e) {
    let newHeight = `${e.target.scrollHeight}px`; /*impo*/
    if(!e.target.value) { newHeight = ""; newOver = "" };
    if(this.state.setHeight >= "80px") { newOver =  "visible" };
    this.setState({
      setHeight : newHeight,
      over: newOver
    });
  }

  changeValue(e) {
    this.setState({ value: e.target.value });
  }

  handleSub(e) {
    e.preventDefault();
    this.setState({
      submitted: true,
      input: this.state.input.concat(this.state.value ),
      value: '',
      setHeight: '',
      over: ''
    });
  }

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
            caption
          </div>
          <div className="comment">
            {this.state.submitted ? this.state.input.map((input) => 
            <p className="p-comment"><span className="span-comment">some id </span>{input}</p>) 
            : "none"}
          </div>
          <div className="time-post">
            time posted
          </div>
        </div>
        <hr />
        <div className="ur-comment">
          <textarea className="comment-message" placeholder="Add a comment..." onKeyUp={this.resizeText} 
          style={{height: this.state.setHeight ? this.state.setHeight : "20px",
          overflow: this.state.over ? this.state.over : "hidden" }} 
          value={this.state.value} onChange={this.changeValue} />
          <input type="submit" value="Post" onClick={this.handleSub} />
        </div>
      </div>
    );
  }
}