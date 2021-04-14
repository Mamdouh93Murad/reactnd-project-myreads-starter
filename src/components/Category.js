import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import {Route, BrowserRouter, Link, Router} from 'react-router-dom'
import '../App.css'
import Book from './Book'
import Search from './Search'
import Shelf from './Shelf'
import { createBrowserHistory } from 'history'

class Category extends Component
{
    render()
    {
        return(
            <div className="list-books">
                <div className="open-search">
                    <Link
                        to="/Search">Search for a book</Link>
                </div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <div className="list-books-content">
                    <div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Currently Reading</h2>
                        
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Want to Read</h2>
                        
                        </div>
                        <div className="bookshelf">
                            <h2 className="bookshelf-title">Read</h2>
                
                        </div>

                    </div>
                 </div>
            </div>
        )
    }
}

export default Category