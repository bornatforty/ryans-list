import React, { Component } from 'react'
import {connect} from 'react-redux'
import {alllistings} from '../actions/FrontPageActions'
import {Link} from 'react-router-dom'
import SearchTop from './SearchTop'
import PostBar from './PostBar'
import '../styles/Listings.css'


class AllThumbs extends Component {

	componentDidMount() {
		alllistings(this.props.match.params.id)
	}

 render() {
   return (
   	<div className="listContainer">
         <PostBar />
         <SearchTop />
         <button value="list"><Link to={`/alllistings/${this.props.match.params.id}`}><i className="fa fa-bars">List</i></Link></button>
            <button value="thumb"><Link to={`/allthumbs/${this.props.match.params.id}`}><i className="fa fa-list">Thumb</i></Link></button>
            <button value="gallery"><Link to={`/allgallery/${this.props.match.params.id}`}><i className="fa fa-image">Gallery</i></Link></button>
   		{this.props.alllistings.map(data => (
   			<div key={data.id} className="thumb">
                  <img src={data.image} />
                  <i className="fa fa-star"></i><Link to={`/post/${data.id}`}>{data.name}</Link><i className="fa fa-trash"></i>
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

export default connect(mapStateToProps)(AllThumbs)