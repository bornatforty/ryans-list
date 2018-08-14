import {createStore} from 'redux'
import FrontPageReducers from '../reducers/FrontPageReducers'

const store = createStore(FrontPageReducers)

export default store