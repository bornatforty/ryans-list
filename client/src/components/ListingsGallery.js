import React, { Component } from 'react'
import {connect} from 'react-redux'
import {listings} from '../actions/FrontPageActions'
import {Link} from 'react-router-dom'
import SearchTop from './SearchTop'
import PostBar from './PostBar'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/Listings.css'


class ListingsGallery extends Component {

	componentDidMount() {
		listings(this.props.match.params.id)

	}

 render() {
   return (
   	<div className="listContainer">
   	<PostBar />
   	<SearchTop />
   	<button value="list"><Link to={`/listings/${this.props.match.params.id}`}><i className="fa fa-bars">List</i></Link></button>
            <button value="thumb"><Link to={`/thumbs/${this.props.match.params.id}`}><i className="fa fa-list">Thumb</i></Link></button>
            <button value="gallery"><Link to={`/gallery/${this.props.match.params.id}`}><i className="fa fa-image">Gallery</i></Link></button>
   		{this.props.listings.map(data => (
   			<div id="views">
               <div key={data.id} className="gallery">
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

export default connect(mapStateToProps)(ListingsGallery)