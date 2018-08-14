import React, { Component } from 'react'
import '../styles/SortBar.css'

class SortBar extends Component {
 render() {
   return (
   	<div className="sortContainer">
   		<select name="view" className="view">
   			<option value="list">List</option>
   			<option value="thumb">Thumb</option>
   			<option value="gallery">Gallery</option>
   			<option value="map">Map</option>
   		</select>
   	  <div className="pages">
   			<form>
   				<span className="pageNav">
                  <i className="fa fa-chevron-left">prev</i>
   				   <i className="fa fa-chevron-right">next</i>
               </span>
   			</form>
   		</div>
   			<button value="submit">Newest</button>
   	</div>
     
   )
 }
}

export default SortBar