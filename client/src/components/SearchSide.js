import React, { Component } from 'react'
import '../styles/SearchSide.css'

class SearchSide extends Component {
 render() {
   return (
   	<div className="SearchSideContainer">
   		<img src="https://avatars1.githubusercontent.com/u/22436444?s=400&v=4" />
   		<p>My Account</p>
   		<form>
   			<input type="text" placeholder="search craigslist" />
   		</form>
   	</div>
     
   )
 }
}

export default SearchSide