import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import {Route, BrowserRouter, Link, Router} from 'react-router-dom'
import '../App.css'
import Category from './Category'
import Book from './Book'
import Shelf from './Shelf'
import { createBrowserHistory } from 'history'


class Search extends Component
{
    render()
    {
        return(
            <div className="search-books">

                <div className="search-books-bar">
                <div className="close-search">
                    <Link
                        to="/">Go to Main Page</Link>
                </div>

                        <div className="search-books-input-wrapper">
                        {/*
                                        <button className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</button>

                            NOTES: The search from BooksAPI is limited to a particular set of search terms.
                            You can find these search terms here:
                            https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                            However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                            you don't find a specific author or title. Every search is limited by search terms.
                        */}
                        <input type="text" placeholder="Search by title or author"/>

                        </div>
                </div>
                    <div className="search-books-results">
                        <ol className="books-grid">
                        </ol>
                    </div>
 
                    </div>
        )
    }
}

export default Search