import React, { Component } from 'react'
import '../styles/PostBar.css'
import 'font-awesome/css/font-awesome.min.css'
import {Link} from 'react-router-dom'
import {listings} from '../actions/FrontPageActions'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'

class PostBar extends Component {

	componentDidMount() {
		listings(this.props.match.params.id)
	}

 render() {
 	if (this.props.match.params.id) { // make sure there is an id before displaying the option to post
   return (
   	<div className="topContainer">
   		<div id="left">
   			<span className="rl"><Link to="/">RL</Link></span>
   			<p>las vegas</p>
   		</div>
   		
		<div key={"listingslink" + this.props.match.params.id} id="right">
   			<p><Link to={`/d/${this.props.match.params.id}/add`}>Post</Link></p>
   			<p>Account</p>
   		</div>
   	</div>
   )
} else {
	return (
      <div className="topContainer">
         <div id="left">
            <span className="rl"><Link to="/">RL</Link></span>
            <p>las vegas</p>
         </div> 
      </div>
      )//do not display post option on front page because no child_id to associate with
 }
}
}

function mapStateToProps(appState) {
	return {
		listings: appState.listings
	}
}

export default withRouter(connect(mapStateToProps)(PostBar))