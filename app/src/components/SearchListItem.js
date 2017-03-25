import React,{Component} from "react";
import {playInfo} from "../api/";

class SearchListItem extends Component{

	constructor(props){
		super(props);
		this.handleAddPlayMusic = this.handleAddPlayMusic.bind(this);
	}

	handleAddPlayMusic(e){
		var parent = e.target.parentNode;
		var mid = parent.getAttribute("data-mid");
		var songname = parent.getAttribute("data-songname");
		var promise = playInfo(mid);
		var self = this;

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
		return (
			<ul className="search-item row" onDoubleClick={this.handleAddPlayMusic} data-mid={this.props.music.songmid} data-songname={this.props.music.songname + "-" + this.props.music.singer[0].name}>
				<li className="cell colspan1">
					<label className="input-control checkbox small-check">
                		<input type="checkbox"/>
                		<span className="check"></span>
            		</label>
            	</li>
				<li className="cell colspan4">{this.props.music.songname}</li>
				<li className="cell colspan3">{this.props.music.singer[0].name}</li>
				<li className="cell colspan4">{this.props.music.albumname}</li>
			</ul>
		)
	}
}

export default SearchListItem;