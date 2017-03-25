import React, { Component } from 'react';
import Main from "./Main"
import Player from "./Player"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentMusic : {}
    };
    this.setCurrentMusic = this.setCurrentMusic.bind(this);
  }

  setCurrentMusic(single){
      this.setState({
        currentMusic : single
      })
  }

  render(){
    return(
      <div className="main">
        <Main currentMusic={this.state.currentMusic} setCurrentMusic={this.setCurrentMusic}/>
        <Player currentMusic={this.state.currentMusic}/>
      </div>
    );
  }
}

export default App
