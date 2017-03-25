import React,{Component} from "react";
import "../css/player.css";

class Player extends Component {
	constructor(props){
		super(props);
	}

	render(){
		var currentMusic = this.props.currentMusic;

		function createAudio(mid,key){
			var audio = document.createElement("audio");
			var playerAudio = document.querySelector("#player-audio");
			var src = "http://dl.stream.qqmusic.qq.com/C400"+ mid +".m4a?vkey=203B673A10FB0403D204944CFE4A13047BAEE7ACC68467273C793DBC073DF28DAEF5F48FBBA1E69BE872E515FC4F4D7A225C53BFC420CC73&guid=129638144&uin=0&fromtag=30";

			audio.src = src;
			audio.autoplay = true;
			audio.addEventListener("canplaythrough",function() {
				//console.log('音频文件已经准备好，随时待命');
			},
			false);

			playerAudio.innerHTML = "";
			playerAudio.appendChild(audio);
		}

		if(currentMusic.songmid){
			createAudio(currentMusic.songmid,currentMusic.vkey);
		}
		
		return (
			<div className="player">
				<div id="player-audio"></div>
			</div>
		);
	}
}

export default Player