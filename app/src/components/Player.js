import React,{Component} from "react";
import "../css/player.css";

class Player extends Component {
	render(){
		var currentMusic = this.props.currentMusic;
		var setCurrentMusic = this.props.setCurrentMusic;
		var arr = [];
		var music = this.props.playMusics;
		var guid = 129638144;
		var $ = window.$;

		function createUrl(mid,key){
			return "http://dl.stream.qqmusic.qq.com/C400"+ mid +".m4a?vkey="+ key +"&guid="+ guid +"&uin=0&fromtag=66";
		}

		for(var item in music){
			var url = createUrl(music[item].songmid,music[item].vkey);
			var str;

			if(music[item].songmid === currentMusic.songmid){
				str = '<li data-mid="'+ music[item].songmid +'" data-src="'+ url +'" data-type="audio/mp3" id="current1">'+ music[item].songname +'</li>';
			}else{
				str = '<li data-mid="'+ music[item].songmid +'" data-src="'+ url +'" data-type="audio/mp3">'+ music[item].songname +'</li>';
			}
			arr.push(str)
		}

        $(".play-list").html("").append(arr.join(""));

        $(document).ready(function(){
        	var audio = window.AUDIO;
        	var current_1 = $("#current1");

        	audio._addPlayList();
        	current_1.click();
        	
        	$('audio').on('ended', function(){
	            setCurrentMusic(music[$(".current").attr("data-mid")]);
	        });
        })
        

		return (
			<div className="player">
				<div data-role="audio">
                <div className="play-list-wrapper">
                    <h1 className="album-title">{this.props.currentMusic.songname}</h1>
                    <ul className="play-list">
          
                    </ul>
                </div>
            </div>
			</div>
		);
	}
}

export default Player