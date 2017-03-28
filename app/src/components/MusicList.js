import React, {Component} from 'react';
import '../css/MusicList.css';

class MusicItem extends Component {
	constructor(props){
		super(props);
		this.handlePlayNow = this.handlePlayNow.bind(this);
	}

	handlePlayNow(e){
		var mid = e.target.getAttribute("data-mid");
		var musics = this.props.playMusics;

		if(musics[mid]){
			this.props.setCurrentMusic(musics[mid]);
		}
	}

	render(){
		var music = this.props.music;
		var currentMusic = this.props.currentMusic;
		var active = currentMusic.songmid === music.songmid;
		var liClassName = active ? "active" : "";
		var spanClassName = active ? "mif-play" : "mif-music";
		
		return (
			<li data-mid={music.songmid} className={liClassName} onDoubleClick={this.handlePlayNow}>
				<span className={spanClassName} data-mid={music.songmid}></span>
				{music.songname}
			</li>
		)
	}
}

class MusicList extends Component {
	render(){
		var musics = this.props.playMusics;
		var musicsComponents = [];
		for(var key in musics){
			var music = musics[key];
			musicsComponents.push(<MusicItem 
				music={music} 
				playMusics={this.props.playMusics}
				currentMusic={this.props.currentMusic} 
				setCurrentMusic={this.props.setCurrentMusic}
				key={key}
			/>)
		}

		return (
			<div className="music-list">
				<div className="m-items">
					<div className="m-header active">
						<span className="mif-chevron-right"></span>
						试听列表
					</div>
					<ul className="m-content">
						{/*<li className="active"><span className="mif-play"></span>子元素设置</li>*/}
						{musicsComponents}
					</ul>
				</div>
			</div>
		);
	}
}

export default MusicList