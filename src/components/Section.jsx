import React, { Component } from 'react';

var newOver = "";

export default class Section extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', more: false, width: "", hideIcon: false, emojies: false,
    setHeight: false, over: false, input: false};
    this.hide = this.hide.bind(this);
    this.showMoreSection = this.showMoreSection.bind(this);
    this.hideMoreSection = this.hideMoreSection.bind(this);
    this.messageShow = this.messageShow.bind(this);
    this.resizeText = this.resizeText.bind(this);
    this.changeValue = this.changeValue.bind(this);
    this.handleSub = this.handleSub.bind(this);
    this.onEnterPress = this.onEnterPress.bind(this);
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
      this.setState({width: "80%", hideIcon: false, emojies: false, input: false});
  } 

  messageShow = () => {
    this.refs.myIn.focus();
    this.setState({width: "90%", hideIcon: true, input: true});
    if(!this.refs.myIn.value) 
      this.setState({emojies: true});
  }

  resizeText = (e) => {
    let newHeight = `${e.target.scrollHeight}px`; 
    if(e.target.value) {
      this.setState({input: true, emojies: false, width: "90%", hideIcon: true});
    } else {
      this.setState({input: false, emojies: true, width: "80%", hideIcon: false});
      newOver = "";
      newHeight = "";
    }
    if(this.state.setHeight >= "40px") { newOver =  "visible" };
    this.setState({
      setHeight : newHeight,
      over: newOver
    });
  }

  changeValue = (e) => this.setState({ value: e.target.value });

  handleSub = (e) => {
    console.log(e.target);
    e.preventDefault();
    this.setState({value: ''});
  }/*some bug for clicking*/

  onEnterPress = (e) => (e.keyCode == 13) ? this.handleSub(e) : null;

  render() {
    return (
      <div>
        <section style={{display: this.props.clicked ? "flex" : "none", filter: this.state.more ? "brightness(50%)" : "none"}}>
          <div className="body-story">
            <div className="header-story">
              <div className="contain-img">
                <img className="pro-story" src={this.props.src} />
                <div className="story-text">
                  <a href="#" title="name">{this.props.name}</a>
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
              <img className="story" src={this.props.section} />
              <div className="message">
                <div className="message-container" onClick={this.messageShow} ref={this.message}
                style={{width: this.state.width ? this.state.width : ""}}>
                  <textarea placeholder="Send message ..." className="input-message" onKeyUp={this.resizeText} 
                  onKeyDown={this.onEnterPress} style={{height: this.state.setHeight ? this.state.setHeight : "20px",
                  overflow: this.state.over ? this.state.over : "hidden"}} 
                  value={this.state.value} onChange={this.changeValue} ref="myIn" />
                  <input type="submit" value="Send" onClick={this.handleSub} 
                  style={{display: this.state.input ? "block" : "none"}} />
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

            <div className="react-emojies" style={{display: this.state.emojies ? "flex" : "none"}}>
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

        <div className="more-section" style={{display: this.props.clicked ? "flex" : "none"}}>
          <div className="more-container" style={{display: this.state.more ? "block" : "none"}}>
            <div className="more-link borderUp" ref={this.link}>
              <a href="mailto: mahmoudi.sanaz59@gmail.com">Report inappropriate</a>
            </div>
            <hr />
            <div className="more-link borderDown">
              <a href="#">Cancle</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}