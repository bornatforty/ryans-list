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
   				<i className="fa fa-chevron-left"></i>
   				<i className="fa fa-arrow-left"><p>prev</p></i>
   				<p></p>
   				<p>next</p><i className="fa fa-arrow-right"></i>
   			</form>
   			</div>
   			<button value="newest" />
   	</div>
     
   )
 }
}

export default SortBar