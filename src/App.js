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

  render() 
  {
    return (
      
    <div className="app">
      <BrowserRouter>
        <Route exact path='/' render={() => (<Category/>)}/>
        <Route exact path='/Search' render={() => (<Search/>)}/>
      </BrowserRouter>
    </div>
      )
  }
}

export default BooksApp
