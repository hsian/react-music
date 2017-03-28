import React,{Component} from "react";
import "../css/player.css";

class Player extends Component {
	render(){
		var currentMusic = this.props.currentMusic;
		var setCurrentMusic = this.props.setCurrentMusic;

		function createAudio(mid,key){
			var audio = document.createElement("audio");
			var playerAudio = document.querySelector("#player-audio");
			var src = "http://dl.stream.qqmusic.qq.com/C400"+ mid +".m4a?vkey="+ key +"&guid=129638144&uin=0&fromtag=66";

			audio.src = src;
			audio.autoplay = true;
			audio.addEventListener("canplaythrough",function() {
				//console.log('音频文件已经准备好，随时待命');
			},
			false);

			audio.addEventListener("error",function() {
				setCurrentMusic({});
				alert('该资源无法播放');
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
				<div className="player-controls">
					<div className="ctr-pannel">
						<span className="mif-backward"></span>
						<span className="mif-play mif-pause ctr-pannel-handle"></span>
						<span className="mif-forward"></span>
					</div>
					<div className="progress-pannel">
						<h4>夜了好吗</h4>
						<div className="play-progress">
							<span className="progress-handle"></span>
							<div className="progress-bar"></div>
							<div className="progress-bar-default"></div>
						</div>
					</div>
					<div className="volume-pannel">
						<span className="mif-volume-medium"></span>
						<div className="volume-progress">
							<span className="v-progress-handle"></span>
							<div className="v-progress-bar"></div>
						</div>
					</div>
				</div>
				<div id="player-audio"></div>
			</div>
		);
	}
}

export default Player