import React, { Component } from 'react'
import {connect} from 'react-redux'
import {listings} from '../actions/FrontPageActions'
import {Link} from 'react-router-dom'
import SearchTop from './SearchTop'
import SortBar from './SortBar'
import PostBar from './PostBar'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/Listings.css'


class Listings extends Component {

	componentDidMount() {
		listings(this.props.match.params.id)

	}

 render() {
   return (
   	<div className="listContainer">
   	<PostBar />
   	<SearchTop />
   	<SortBar />
   		{this.props.listings.map(data => (
   			<div id="views">
   				<div key={data.id} className="listing active">
   					<i className="fa fa-star"></i><Link to={`/post/${data.id}`}>{data.name}</Link><i className="fa fa-trash"></i>
   				</div>
   				<div key={data.id + 1} className="listing inactive">
   					<img src={data.image} />
   					<i className="fa fa-star"></i><Link to={`/post/${data.id}`}>{data.name}</Link><i className="fa fa-trash"></i>
   				</div>
   				<div key={data.id + 2} className='listing inactive'>
   					<img src={data.image} />
   					<i className="fa fa-star"></i><Link to={`/post/${data.id}`}>{data.name}</Link><i className="fa fa-trash"></i>
   				</div>
   			</div>
   			))}
   	</div>
     
   )
 }
}

function mapStateToProps(appState) {
	return {
		listings: appState.listings
	}
}

export default connect(mapStateToProps)(Listings)