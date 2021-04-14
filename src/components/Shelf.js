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

    render()
    {
        return(
            <div>
            {this.props.names.map((name) =>
                (
                <div className="bookshelf">
                    <h2 className="bookshelf-title">{name}</h2>
                </div>
                ))
            }
            </div>

        )
    }
}

export default Shelf