import React, { Component } from 'react';
import Main from "./Main"
import Player from "./Player"

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      currentMusic : {},
      playMusics : {}
    };
    this.setCurrentMusic = this.setCurrentMusic.bind(this);
    this.setPlayMusics = this.setPlayMusics.bind(this)
  }

  setCurrentMusic(single){
      this.setState({
        currentMusic : single
      })
  }

  setPlayMusics(object){
    this.setState({
      playMusics : object
    })
  }

  render(){
    return(
      <div className="main">
        <Main 
          currentMusic={this.state.currentMusic} 
          setCurrentMusic={this.setCurrentMusic}
          playMusics={this.state.playMusics}
          setPlayMusics={this.setPlayMusics}
        />
        <Player 
          currentMusic={this.state.currentMusic} 
          setCurrentMusic={this.setCurrentMusic}
          playMusics={this.state.playMusics}
          setPlayMusics={this.setPlayMusics}
        />
      </div>
    );
  }
}

export default App
