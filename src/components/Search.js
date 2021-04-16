import React, { Component } from 'react'
import * as BooksAPI from '../BooksAPI'
import {Link} from 'react-router-dom'
import '../App.css'
// import Category from './Category'
import Book from './Book'
// import Shelf from './Shelf'
// import { createBrowserHistory } from 'history'
// The Search Functionality and Implementation has been done in accordance with 
// https://stackoverflow.com/questions/63824327/react-js-how-do-you-implement-search-functionality
// specially the part where we implement the Key-Press and invoke the Search Function
class Search extends Component
{
    state = {
        books:[],
        query:''
      }
      handleChange = (event) => {
        this.setState({query:event.target.value });
      }

      search = () => {
        this.state.query.length && BooksAPI.search(this.state.query).then((books)=> {
          console.log(books);
          this.setState( {books:books} )
        })
      }
    render()
    {
        this.props.library.map((b) =>
        (
            this.state.books.map((book) => b.id === book.id &&
            (
                book.shelf = b.shelf
            ))
        ))
        return(
            <div className="search-books">

                <div className="search-books-bar">
                <div className="close-search">
                    <Link
                        to="/">Go to Main Page</Link>
                </div>

            <div className="search-books-input-wrapper">
                <input
                    className="search-books"
                    type="text"
                    placeholder="Search by title or author"
                    value={this.state.query}
                    onKeyPress={this.search()}
                    onChange={this.handleChange}
                />   
            </div>
        </div>
        <div className="search-books-results">
            <ol className="books-grid">
                <Book books={this.state.books}/>
            </ol>
        </div>
    </div>
        )
    }
}

export default Search