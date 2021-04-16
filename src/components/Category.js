import React, { Component } from 'react'
// import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'
import '../App.css'
// import Book from './Book'
// import Search from './Search'
import Shelf from './Shelf'
// import { createBrowserHistory } from 'history'
const names = ['currentlyReading', 'wantToRead', 'read']
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
                <Shelf handleChange={this.props.handleChange} books={this.props.books} names={names}/>
            </div>
        )
    }
}

export default Category