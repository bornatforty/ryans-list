const InitialState = {
	categories: [],
	listings: [],
	post: [],
	alllistings: []

}

export default function (state = InitialState, action) {
	switch(action.type) {
		case 'GET_CATEGORIES':
		return {...state, categories: action.payload}
		case 'GET_LISTINGS':
		return {...state, listings: action.payload}
		case 'GET_POSTS':
		return {...state, post: action.payload}
		case 'GET_ALLLISTINGS':
		return {...state, alllistings: action.payload}
		
		default:
			return state
	}
}