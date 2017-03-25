import React, { Component } from 'react';

import '../css/App.css';
import Header from "./Header"
import MusicList from "./MusicList"
import SearchList from "./SearchList"
import Player from "./Player"

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      musics : [],
      pageNow : 0,
      playMusics : {},
    }
    this.setMusics = this.setMusics.bind(this)
    this.setPageNow = this.setPageNow.bind(this)
    this.setPlayMusics = this.setPlayMusics.bind(this)
  }

  setMusics(array){
    this.setState({
      musics : array
    })
  }

  setPageNow(num){
    this.setState({
      pageNow : num
    })
  }

  setPlayMusics(object){
    this.setState({
      playMusics : object
    })
  }

  render() {

    return (
      <div className="App">
        <Header 
          setMusics={this.setMusics} 
          setPageNow={this.setPageNow}
        />
        <div className="content flex-grid">
          <div className="row">
            <MusicList
              playMusics={this.state.playMusics}
              currentMusic={this.props.currentMusic}
              setCurrentMusic={this.props.setCurrentMusic}
            />
            <SearchList 
              musics={this.state.musics} 
              pageNow={this.state.pageNow}
              setPageNow={this.setPageNow}
              playMusics={this.state.playMusics}
              setPlayMusics={this.setPlayMusics}
              setCurrentMusic={this.props.setCurrentMusic}
            />
          </div> 
        </div>
      </div>
    );
  }
}

export default Main;