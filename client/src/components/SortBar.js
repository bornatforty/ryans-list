import React, { Component } from 'react'
import '../styles/SortBar.css'
import 'font-awesome/css/font-awesome.min.css'

class SortBar extends Component {
 render() {
   return (
   	<div className="sortContainer">
   		<form id="views">
   			<button value="list"><i className="fa fa-bars">List</i></button>
   			<button value="thumb"><i className="fa fa-list">Thumb</i></button>
   			<button value="gallery"><i className="fa fa-image">Gallery</i></button>
   		</form>
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