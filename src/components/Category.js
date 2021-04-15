import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import {Route, BrowserRouter, Link, Router} from 'react-router-dom'
import '../App.css'
import Book from './Book'
import Search from './Search'
import Shelf from './Shelf'
import { createBrowserHistory } from 'history'
const names = ['Currently Reading', 'Want to Read', 'Read']
class Category extends Component
{

    render()
    {
        return(
            <div className="list-books" >
                <div className="open-search">
                    <Link
                        to="/Search">Search for a book</Link>
                </div>
                <div className="list-books-title">
                    <h1>MyReads</h1>
                </div>
                <Shelf names={names}/>
            </div>
        )
    }
}

export default Category