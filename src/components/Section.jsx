import React, { Component } from 'react';

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {more: false, width: "", hideIcon: false};
    this.hide = this.hide.bind(this);
    this.showMoreSection = this.showMoreSection.bind(this);
    this.hideMoreSection = this.hideMoreSection.bind(this);
    this.messageShow = this.messageShow.bind(this);
    this.moreRef = React.createRef();
    this.link = React.createRef();
    this.message = React.createRef();
  }

  hide = () => this.props.onClick();

  showMoreSection = () => this.setState(state => ({more: !state.more}));

  componentDidMount = () => document.addEventListener("mousedown", this.hideMoreSection);
  componentWillUnmount = () => document.removeEventListener("mousedown", this.hideMoreSection);

  hideMoreSection = (e) => {
    if(!this.moreRef.current.contains(e.target) && !this.link.current.contains(e.target)) 
      this.setState({more: false});
    if(!this.message.current.contains(e.target)) 
      this.setState({width: "80%", hideIcon: false});
  } 

  messageShow = () => {
    this.setState({width: "90%", hideIcon: true});
  }

  render() {
    return (
      <section style={{display: this.props.clicked ? "flex" : "none"}}>
        <div className="more-section" style={{display: this.state.more ? "block" : "none"}}>
          <div className="more-link borderUp" ref={this.link}>
            <a href="mailto: mahmoudi.sanaz59@gmail.com">Report inappropriate</a>
          </div>
          <hr />
          <div className="more-link borderDown">
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
            <div className="more" onClick={this.showMoreSection} ref={this.moreRef}>
              ...
            </div>
          </div>
          <div className="hr-story">
            <hr />
          </div>

          <div className="main-story">
            <div className="left-side">
              <div className="arrow-story" style={{display: this.state.more ? "none" : "block"}}>
                <i>&lt;</i>
              </div>
            </div>
            <img className="story" src="./images/WALL3.jpeg"/>
            <div className="message">
              <div className="message-container" onClick={this.messageShow} ref={this.message}
              style={{width: this.state.width ? this.state.width : ""}}>
                <textarea placeholder="Send message ..." className="input-message" onKeyUp="resizeText(this)" defaultValue={""} />
                <input type="submit" defaultValue="Send" />
              </div>
              <i className="far fa-paper-plane" style={{display: this.state.hideIcon ? "none" : "block"}}/>
            </div>
            <div className="right-side">
              <div className="close-story" onClick={this.hide}>
                ×
              </div>
              <div className="arrow-story" style={{display: this.state.more ? "none" : "block"}}>
                <i>&gt;</i>
              </div>
            </div>
          </div>

          <div className="react-emojies" style={{display: this.state.hideIcon ? "flex" : "none"}}>
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
      </section>
    );
  }
}