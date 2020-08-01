import React, { Component } from 'react';

var count = 1;
var temp = 0;
var showLeftBool = true;

export default class Story extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showLeft: false, trans: 0};
    this.imgProf = [];
    this.name = [];
    this.transfromShow = this.transfromShow.bind(this);
    this.transformHide = this.transformHide.bind(this);
    this.show = this.show.bind(this);
    this.catch = this.catch.bind(this);
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
    });
  }

  show = (e) => this.props.onClick();

  catch = (index) => {
    console.log(this.imgProf[index].src);
    console.log(this.name[index].textContent);
    this.props.getData(this.imgProf[index].src, this.name[index].textContent);
  }

  render() {
    return (
      <div className="stories">
        <div className="all-stories" style={{transform: this.state.trans}} >
        {userStory.map((user, index) => (
          <div className="contain-story" onClick={() => this.catch(index)}>
            <div className="contain-pic" onClick={this.show}>
              <img className="story-pic" src={user.imgProf} ref={ref => this.imgProf[index] = ref} />
            </div>
            <div className="story-text" onClick={this.show}>
              <a href="#" ref={ref => this.name[index] = ref}>{user.name}</a>
            </div>
          </div>
        ))}
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

const userStory = [
  {id: 1, name: "user 1", imgProf: "./images/avatar.png" },
  {id: 2, name: "user 2", imgProf: "./images/avatar-other.jpeg"},
  {id: 3, name: "user 3", imgProf: "./images/avatar-other2.jpg"},
  {id: 4, name: "user 4", imgProf: "./images/avatar-other.jpeg"},
  {id: 5, name: "user 5", imgProf: "./images/avatar-other2.jpg"},
  {id: 6, name: "user 6", imgProf: "./images/avatar-other.jpeg"},
  {id: 7, name: "user 7", imgProf: "./images/avatar-other2.jpg"},
  {id: 8, name: "user 8", imgProf: "./images/prof.jpg"},
  {id: 9, name: "user 9", imgProf: "./images/avatar-other2.jpg"},
  {id: 10, name: "user 10", imgProf: "./images/avatar-other.jpeg"},
  {id: 11, name: "user 11", imgProf: "./images/avatar-other2.jpg"},
]