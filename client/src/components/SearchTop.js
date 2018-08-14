import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css'
import '../styles/SearchTop.css'

class SearchTop extends Component {
 render() {
   return (
   	<div className="searchContainer">
   		<form>
   			<i className="fa fa-chevron-left"></i>
   			<input className="search" placeholder="search" />
   			<button type="submit" className="fa fa-search" />
   			<span className="stackem">save search</span>
   		</form>
   	</div>
     
   )
 }
}

export default SearchTop