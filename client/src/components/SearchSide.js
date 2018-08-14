import React, { Component } from 'react'
import '../styles/SearchSide.css'

class SearchSide extends Component {
 render() {
   return (
   	<div className="SearchSideContainer">
   		<h2>Ryanslist</h2>
   		<p>My Account</p>
   		<form>
   			<input type="text" placeholder="search craigslist" />
   		</form>
   	</div>
     
   )
 }
}

export default SearchSide