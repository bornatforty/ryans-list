import React, { Component } from 'react'
import '../styles/App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import MainPage from './MainPage'
import store from '../styles/store'
import Listings from './Listings'
import AllListings from './AllListings'
import AddListing from './AddListing'
import Post from './Post'


class App extends Component {
  render () {
    return (
    	<Provider store={store}>
    		<Router>
    			<Switch>
    				<Route exact path={'/'} component={MainPage} />
    				<Route path={'/listings/:id'} component={Listings} />
    				<Route path={'/alllistings/:id'} component={AllListings} />
    				<Route exact path={'/d/:id/add'} component={AddListing} />
    				<Route path={'/post/:id'} component={Post} />
    			</Switch>
    		</Router>
      	</Provider>
    )
  }
}

export default App
