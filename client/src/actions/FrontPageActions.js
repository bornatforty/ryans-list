import axios from 'axios'
import store from '../styles/store'

export function categories() {
	axios.get('api/categories').then(resp => {
		store.dispatch({
			type: 'GET_CATEGORIES',
			payload: resp.data
		})
	})
}

export function listings(id) {
	axios.get('/api/listings/' + id).then(resp => {
		store.dispatch({
			type: 'GET_LISTINGS',
			payload: resp.data
		})
	})
}

export function post(id) {
	axios.get('/api/post/' + id).then(resp => {
		store.dispatch({
			type: 'GET_POSTS',
			payload: resp.data
		})
	})
}

export function alllistings(id) {
	axios.get('/api/alllistings/' + id).then(resp =>{
		store.dispatch({
			type: 'GET_ALLLISTINGS',
			payload: resp.data
		})
	})
}

export function createListing(listing) {
	axios.post('/api/listings', listing).then(resp => {
		console.log(resp)
	})
}