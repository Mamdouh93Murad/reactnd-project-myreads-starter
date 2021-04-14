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
                <p>Shelf</p>
        )
    }
}

export default Shelf