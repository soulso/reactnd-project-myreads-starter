import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import Books from './components/books/Books'
import Search from './components/search/Search'
import './App.css'

class BooksApp extends Component {
  state = {
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" component={Books} />
        <Route path="/search" component={Search} />
      </div>
    )
  }
}

export default BooksApp
