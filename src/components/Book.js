import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
// import {Route, BrowserRouter, Link, Router, Redirect , useHistory} from 'react-router-dom'
import '../App.css'
// import Category from './Category'
// import Search from './Search'
// import Shelf from './Shelf'
// import { createBrowserHistory } from 'history'


class Book extends Component
{
    // state = 
    // {
    //     shelf : ''
    // }
    handleChange = (event) => {
        console.log(event.target.id)
        console.log(event.target.value)
        // console.log(this.state.shelf)
        BooksAPI.update({'id': event.target.id}, event.target.value).then((response)=> {
            window.location.href = "http://localhost:3000/";

         
        })
      }
    render()
    {
       return(
            <div className="bookshelf-books">
                <ol className="books-grid">
                {this.props.books && this.props.books.length ?
                (
                this.props.books.map((book) => 
                (
                <li key={book.id}>
                  <div className="book">
                    <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 188, backgroundImage: book.imageLinks ?  `url(${book.imageLinks.smallThumbnail})` : `url(${book.backgroundImage})`}}></div>
                      <div className="book-shelf-changer">
                        <select                        
                            value={book.shelf}
                            onChange={this.handleChange}
                            id={book.id}
                        >
                          <option
                            value="none"
                            disabled
                            >Move to...</option>
                            <option
                            value="none">None</option>
                          <option
                            value="currentlyReading"
                            >Currently Reading</option>
                          <option
                          value="wantToRead"
                          >Want to Read</option>
                          <option
                            value="read">Read</option>

                        </select>
                      </div>
                    </div>
                    <div className="book-title">{book.title}</div>
                    <div className="book-authors">{book.authors}</div>
                  </div>
                </li>
                ))): 
                <div>No Result</div>}
                </ol>
            </div>
        )
    }
}

export default Book