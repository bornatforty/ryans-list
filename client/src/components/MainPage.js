import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {categories} from '../actions/FrontPageActions'
import Cities from './Cities'
import SearchSide from './SearchSide'
import PostBar from './PostBar'
import '../styles/MainPage.css'


class MainPage extends Component {

	componentDidMount() {
		categories()
	}


 render() {
   return (
   	<div className="grandeContainer">
   		<PostBar />
   		<div className="cityBar">
   		Las Vegas
   		</div>
   		<div className="container">
   			<SearchSide />
   			{this.props.categories.map(data => (
				<div key={data.id} className="header">
					<h2><Link to={`/alllistings/${data.id}`}>{data.category}</Link></h2>
				{data.sub.map((sub, i) => (
					<div key="i" className="sub">
					<p><Link to={`/listings/${sub.id}`}>{sub.category}</Link></p>
					</div>
				))}
				</div>
   			))}
   			<Cities />
   		</div>
     </div>
   )
 }
}

function mapStateToProps(appState) {
	return {
		categories: appState.categories
	}
}

export default connect(mapStateToProps)(MainPage)