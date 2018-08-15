import React, { Component } from 'react'
import '../styles/App.css'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Provider} from 'react-redux'
import MainPage from './MainPage'
import store from '../styles/store'
import Listings from './Listings'
import AllListings from './AllListings'
import AllThumbs from './AllThumbs'
import AllGallery from './AllGallery'
import ListingsGallery from './ListingsGallery'
import ListingsThumbs from './ListingsThumbs'
import AddListing from './AddListing'
import Post from './Post'


class App extends Component {
  render () {
    return (
    	<Provider store={store}>
    		<Router>
    			<Switch>
    				<Route exact path={'/'} component={MainPage} />
    				<Route exact path={'/listings/:id'} component={Listings} />
                    <Route path={'/gallery/:id'} component={ListingsGallery} />
                    <Route path={'/thumbs/:id'} component={ListingsThumbs} />
    				<Route path={'/alllistings/:id'} component={AllListings} />
                    <Route path={'/allthumbs/:id'} component={AllThumbs} />
                    <Route path={'/allgallery/:id'} component={AllGallery} />
    				<Route path={'/d/:id/add'} component={AddListing} />
    				<Route path={'/post/:id'} component={Post} />
    			</Switch>
    		</Router>
      	</Provider>
    )
  }
}

export default App
