import React, {Component} from 'react';
import '../css/Header.css';

import SearchSort from "./SearchSort"
import {changeApi,searchApi} from "../api/"

class Header extends Component {

	constructor(props){
		super(props);
		this.state = {
			sortComponents : [],
			filterText : "",
			delayTime : 0
		}
		this.handleInputChange = this.handleInputChange.bind(this);
		this.handleInputBlur = this.handleInputBlur.bind(this);
		this.handlefilterText = this.handlefilterText.bind(this);
		this.updateDelayTime = this.updateDelayTime.bind(this);
	}

	createScript(url,fn){
		var head = document.querySelector("head");
		var script = document.createElement("script");
		window.SmartboxKeysCallbackmod_search4272 = function(data){
			head.removeChild(document.querySelector("#lastScript"));
			fn(data);
		}

		script.src = url;
		script.id = "lastScript";
		head.appendChild(script);
	}

	handleInputChange(e){
		var self = this;
		var value = encodeURIComponent(e.target.value);
		var promise = changeApi(value);

		promise.then(function(data){
			var sortArray = [];
			var _data = data.data;
			self.handleInputFocus();
		
			for(var key in _data){
				sortArray.push(self.renderSmartList(key,_data[key]));
			}

			self.setState({
				sortComponents : sortArray
			});
		});

		this.handlefilterText(e.target.value)
	}

	renderSmartList(key,value){
		var sortHeader; 

		switch(key){
			case "song":
				sortHeader = "单曲";
				break;
			case "singer":
				sortHeader = "歌手";
				break;
			case "album":
				sortHeader = "专辑";
				break;
			default:
				return;
		}

		return <SearchSort 
			header={sortHeader} 
			data={value} 
			key={key}
			filterText={this.handlefilterText}
		/>;	
	}

	handlefilterText(value){
		this.setState({
			filterText : value
		})
	}

	handleInputFocus(){
		this.searchHide.classList.remove("hide");
	}

	updateDelayTime(e){
		var time = e.type === "mouseenter" ? "300" : 0;
		this.setState({
			delayTime : time
		});
	}

	handleInputBlur(e){
		var self = this;
		setTimeout(function(){
			self.searchHide.classList.add("hide");
		},this.state.delayTime);
	}

	render(){
		var self = this;

		window.onkeydown = function(e){
			if(e.keyCode === 13){
				var promise = searchApi(document.querySelector("#search").value);

				self.handleInputBlur();
				self.props.setPageNow(0);
				promise.then(function(data){
					self.props.setMusics(data.data.song.list || [])
				})
			}
		}

		return (
			<header className="grid">
				<div className="row cells2">
					<div className="input-control text cell" data-role="input">
		                <input type="text" placeholder="歌曲/歌手/专辑" id="search" onChange={this.handleInputChange} onBlur={this.handleInputBlur} value={this.state.filterText}/>
		                <button className="button">
		                	<span className="mif-search"></span>
		                </button>
		                <div className="search-sort -hide" onMouseEnter={this.updateDelayTime} onMouseLeave={this.updateDelayTime} ref={(e)=>{this.searchHide = e}}>
							{this.state.sortComponents}
			            </div>
		            </div>
	            </div>
			</header>
		);
	}
}

export default Header