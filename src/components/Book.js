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
            <p>Book</p>
        )
    }
}

export default Book