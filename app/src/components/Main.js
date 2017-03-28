import React, { Component } from 'react';

import '../css/App.css';
import Header from "./Header"
import MusicList from "./MusicList"
import SearchList from "./SearchList"

class Main extends Component {

  constructor(props){
    super(props)
    this.state = {
      musics : [],
      pageNow : 0
    }
    this.setMusics = this.setMusics.bind(this)
    this.setPageNow = this.setPageNow.bind(this)
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
              playMusics={this.props.playMusics}
              currentMusic={this.props.currentMusic}
              setCurrentMusic={this.props.setCurrentMusic}
              setPlayMusics={this.props.setPlayMusics}
            />
            <SearchList 
              musics={this.state.musics} 
              pageNow={this.state.pageNow}
              setPageNow={this.setPageNow}
              playMusics={this.props.playMusics}
              setPlayMusics={this.props.setPlayMusics}
              setCurrentMusic={this.props.setCurrentMusic}
            />
          </div> 
        </div>
      </div>
    );
  }
}

export default Main;