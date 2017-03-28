import React,{Component} from "react";
import {playInfo} from "../api/";

class SearchListItem extends Component{

	constructor(props){
		super(props);
		this.handleAddPlayMusic = this.handleAddPlayMusic.bind(this);
	}

	handleAddPlayMusic(e){
		var self = this;
		var music = self.props.music;
		var mid = music.songmid;
		var songname = music.songname + " - " + music.singer[0].name;
		var promise = playInfo(mid);

		/*if(self.props.music["alertid"] === 0){
			alert("该资源已下架");
			return;
		}*/

		promise.then(function(data){
			var item = data.data.items[0] || {};

			item.songname = songname;
			self.props.setCurrentMusic(item)

			if(!self.props.playMusics[mid]){
				var object = self.props.playMusics;

				object[mid] = item;
				self.props.setPlayMusics(object);
			}
		})
	}

	render(){
		var music = this.props.music;

		return (
			<ul className="search-item row" onDoubleClick={this.handleAddPlayMusic} data-mid={music.songmid} data-songname={music.songname + "-" + music.singer[0].name}>
				<li className="cell colspan1">
					<label className="input-control checkbox small-check">
                		<input type="checkbox"/>
                		<span className="check"></span>
            		</label>
            	</li>
				<li className="cell colspan4">{music.songname}</li>
				<li className="cell colspan3">{music.singer[0].name}</li>
				<li className="cell colspan4">{music.albumname}</li>
			</ul>
		)
	}
}

export default SearchListItem;