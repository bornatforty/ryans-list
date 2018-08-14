import React, { Component } from 'react'
import {connect} from 'react-redux'
import {alllistings} from '../actions/FrontPageActions'
import {Link} from 'react-router-dom'
import SearchTop from './SearchTop'
import SortBar from './SortBar'
import PostBar from './PostBar'
import '../styles/Listings.css'


class AllListings extends Component {

	componentDidMount() {
		alllistings(this.props.match.params.id)
	}

 render() {
   return (
   	<div className="listContainer">
         <PostBar />
         <SearchTop />
         <SortBar />
   		{this.props.alllistings.map(data => (
   			<div key={data.id} className="listing">
   			<Link to={`/post/${data.id}`}>{data.name}</Link>
   			</div>
   			))}
   	</div>
     
   )
 }
}

function mapStateToProps(appState) {
	return {
		alllistings: appState.alllistings
	}
}

export default connect(mapStateToProps)(AllListings)