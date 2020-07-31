import React, { Component } from 'react';

var newOver = "";
var newCm = false;

export default class Content extends React.Component {
  constructor(props) {
    super(props);
    this.state = { setHeight : false, over: false, value: '', submitted: false, 
    input: [], showCm: [], expand: [], more: false };
    this.resizeText = this.resizeText.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.handleSub = this.handleSub.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
    this.expandText = this.expandText.bind(this);
    this.showMoreSection = this.showMoreSection.bind(this);
    this.hideMoreSection = this.hideMoreSection.bind(this);
    this.moreRef = React.createRef();
    this.link = React.createRef();
  }

  resizeText = (e) => {
    let newHeight = `${e.target.scrollHeight}px`; /*impo*/
    if(!e.target.value) { newHeight = ""; newOver = "" };
    if(this.state.setHeight >= "80px") { newOver =  "visible" };
    this.setState({
      setHeight : newHeight,
      over: newOver
    });
  }

  changeValue = (e) => this.setState({ value: e.target.value });
  
  handleSub = (e) => {
    e.preventDefault();
    (this.state.value.length > 40) ? newCm = true : newCm = false;
    this.setState({
      submitted: true,
      input: this.state.input.concat(this.state.value),
      value: '',
      setHeight: '',
      over: '',
      showCm: this.state.showCm.concat(newCm),
    });
  }

  onEnterPress = (e) => (e.keyCode == 13) ? this.handleSub(e) : null;

  expandText = () => this.setState({expand: this.state.expand.concat(true)});
  

  showMoreSection = () => this.setState(state => ({more: !state.more}));

  componentDidMount = () => document.addEventListener("mousedown", this.hideMoreSection);
  componentWillUnmount = () => document.removeEventListener("mousedown", this.hideMoreSection);

  hideMoreSection = (e) => {
    if(!this.moreRef.current.contains(e.target) && !this.link.current.contains(e.target)) 
      this.setState({more: false});
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
          <div className="more"  onClick={this.showMoreSection} ref={this.moreRef}>
            ...
          </div>
        </div>
        <div className="more-section" style={{display: this.state.more ? "block" : "none"}}>
          <div className="more-link borderUp" ref={this.link}>
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
            {this.state.submitted ? this.state.input.map((input, index) => 
            <p className="p-comment" style={{whiteSpace: this.state.expand[index] ? "normal" : "nowrap"}}>
            <span className="span-comment">some id </span>{input}
            <span className="more-cm" style={{display: this.state.showCm[index] && !this.state.expand[index] ? "block" : "none"}}>
            <a onClick={this.expandText}>more...</a></span></p>) 
            : "none"}
          </div>
          <div className="time-post">
            time posted
          </div>
        </div>
        <hr />
        <div className="ur-comment">
          <textarea className="comment-message" placeholder="Add a comment..." 
          onKeyUp={this.resizeText} onKeyDown={this.onEnterPress}
          style={{height: this.state.setHeight ? this.state.setHeight : "20px",
          overflow: this.state.over ? this.state.over : "hidden" }} 
          value={this.state.value} onChange={this.changeValue} />
          <input type="submit" value="Post" onClick={this.handleSub} />
        </div>
      </div>
    );
  }
}