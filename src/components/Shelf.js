import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import {Route, BrowserRouter, Link, Router} from 'react-router-dom'
import '../App.css'
import Book from './Book'
import Search from './Search'
import Category from './Category'
import { createBrowserHistory } from 'history'

class Shelf extends Component
{
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
        return(
            <div>
            {this.props.names.map((name) =>
                (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{name}</h2>
                    <Book category={name}  books={this.state.books}/>
                </div>
                ))
            }
            </div>

        )
    }
}

export default Shelf