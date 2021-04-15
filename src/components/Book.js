import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import {Route, BrowserRouter, Link, Router} from 'react-router-dom'
import '../App.css'
import Category from './Category'
import Search from './Search'
import Shelf from './Shelf'
import { createBrowserHistory } from 'history'


class Book extends Component
{

    render()
    {
       return(
            <div>
                <ol>
                {this.props.books.map((book) => 
                (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
                      <div className="book-shelf-changer">
                        <select
                          value={this.state.shelf}
                          onChange={this.handleChange}
                          id={book.id}
                          >
                          <option
                            value="none"
                            disabled
                            >Move to...</option>
                          <option
                            value="currentlyReading"
                            >Currently Reading</option>
                          <option
                          value="wantToRead"
                          >Want to Read</option>
                          <option
                            value="read">Read</option>
                          <option
                            value="none">None</option>
                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.author}</div>
                  </div>
                </li>
                ))}
                </ol>
            </div>
        )
    }
}

export default Book