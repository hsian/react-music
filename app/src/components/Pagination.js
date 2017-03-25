import React,{Component} from "react";
import "../css/Pagination.css"

class PaginationItem extends Component{
	constructor(props){
		super(props);
		this.handlePageNow = this.handlePageNow.bind(this);
	}

	handlePageNow(e){
		var target = e.target;
		this.props.setPageNow(target.innerText - 1);
	}

	render(){
		var disabled = this.props.pageNow + 1 === this.props.count + 1 ? true : false;

		return(
			<button className="button" disabled={disabled} onClick={this.handlePageNow}>{this.props.count + 1}</button>
		)
	}
}

class Pagination extends Component{

	constructor(props){
		super(props);
		this.prevPage = this.prevPage.bind(this);
		this.nextPage = this.nextPage.bind(this);
	}

	prevPage(e){
		if(this.props.pageNow === 0){
			return;
		}

		this.props.setPageNow(this.props.pageNow - 1);
	}

	nextPage(e){
		var pageCount = this.props.pageCount;
		var count = Math.ceil(pageCount / 10);

		if(this.props.pageNow === count - 1){
			return;
		}
		this.props.setPageNow(this.props.pageNow + 1);
	}

	render(){
		var html;
		var pageCount = this.props.pageCount;
		var pageArray = [];

		if(pageCount > 10){
			var count = Math.ceil(pageCount / 10);
			while(count--){
				pageArray.unshift(<PaginationItem count={count} key={count} setPageNow={this.props.setPageNow} pageNow={this.props.pageNow}/>);
			}	

			html =  (
				<div className="pagination">
					<button className="button" onClick={this.prevPage}>上一页</button>
				   	{pageArray}
				    <button className="button" onClick={this.nextPage}>下一页</button>
				</div>
			);
		}else if(this.props.pageCount === 0){
			html = (
				<div className="pagination">
					没有歌曲
				</div>
			)
		}else{
			html = (
				<div className="pagination">
					
				</div>
			)
		}
		
		return html;
	}
}

export default Pagination