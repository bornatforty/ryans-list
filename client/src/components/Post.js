import React, { Component } from 'react'
import {connect} from 'react-redux'
import {post} from '../actions/FrontPageActions'
import '../styles/Post.css'

class Post extends Component {

	componentDidMount() {
		post(this.props.match.params.id)
	}

 render() {
   return (
   	<div className="postContainer">
   		{this.props.post.map(data => (
   			<div key={data.id} className="post">
   				<h2 className="postName"><i className="fa fa-star"></i>{data.name}<i className="fa fa-trash"></i></h2>
   				<img src={data.image} />
   				<p className="postDesc">{data.description}</p>
   			</div>
   		))}
   	</div>
     
   )
 }
}

function mapStateToProps(appState) {
	return {
		post: appState.post
	}
}

export default connect(mapStateToProps)(Post)