import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Category from './components/Category'
import Book from './components/Book'
import Search from './components/Search'
import {Route, BrowserRouter, Link, Router} from 'react-router-dom'
import Shelf from './components/Shelf'
import { createBrowserHistory } from 'history'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
  }
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books })
    })
  }
  render() 
  {
    return (
      
    <div className="app">
      <BrowserRouter>
        <Route exact path='/' render={() => (<Category books={this.state.books}/>)}/>
        <Route exact path='/Search' render={() => (<Search/>)}/>
      </BrowserRouter>
    </div>
      )
  }
}

export default BooksApp
