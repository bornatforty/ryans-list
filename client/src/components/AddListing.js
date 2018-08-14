import React, { Component } from 'react'
import {createListing} from '../actions/FrontPageActions'
import '../styles/AddListing.css'

class AddListing extends Component {
	state = {
		name: '',
		image: '',
		description: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	handleSubmit = (e) => {
		e.preventDefault()
		createListing({
			name: this.state.name,
			image: this.state.image,
			description: this.state.description,
			child_id: this.props.match.params.id
		})
	}
 render() {
   return (
   	<div className="AddContainer">
   		<form onSubmit={this.handleSubmit} className="AddForm">
   			<label htmlFor="name" className="AddCaption">Posting Title</label>
   				<input type="text" id="name" name="name" onChange={this.handleChange} value={this.state.name} />
   			<label htmlFor="image" className="AddCaption">Posting Image</label>
   				<input type="text" id="image" name="image" onChange={this.handleChange} value={this.state.image} />
   			<label htmlFor="description" className="AddCaption">Posting Body</label>
   			<textarea type="text" id="description" name="description" onChange={this.handleChange} value={this.state.description} />
   			<button type="submit">Submit</button>
   		</form>
   	</div>
     
   )
 }
}

export default AddListing