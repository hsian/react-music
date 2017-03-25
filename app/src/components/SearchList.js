import React,{Component} from "react";
import "../css/SearchList.css";

import Pagination from "./Pagination";
import SearchListItem from "./SearchListItem";

class SearchList extends Component{
	constructor(props){
		super(props);
		this.state = {
			pageSize : 10
		}
	}

	componentWillMount(){
		//console.log(1)
	}

	handleFilter(){
		var state = this.state;
		var size = this.props.pageNow * state.pageSize;
		return this.props.musics.slice(size,size + state.pageSize);
	}

	render(){
		var self = this;
		var musics = this.handleFilter();
		var musicsGroup = []
		musics.forEach(function(e,i){
			musicsGroup.push(<SearchListItem 
				music={e} 
				key={i}
				playMusics={self.props.playMusics}
				setPlayMusics={self.props.setPlayMusics}
              	setCurrentMusic={self.props.setCurrentMusic}
			/>)
		});

		return(
			<div className="search-res">
				<div className="search-wrap">
					<ul className="search-header row">
						<li className="cell colspan1"></li>
						<li className="cell colspan4">歌曲</li>
						<li className="cell colspan3">歌手</li>
						<li className="cell colspan4">专辑</li>
					</ul>
					<div className="search-content">
						{musicsGroup}	
					</div>
					<Pagination 
						pageNow={this.props.pageNow}
						pageCount={this.props.musics.length}
						setPageNow={this.props.setPageNow}
					/>
				</div>
			</div>
		);
	}
}

export default SearchList