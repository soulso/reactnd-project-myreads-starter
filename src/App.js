import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import Books from './components/books/Books'
import Search from './components/search/Search'
import './App.css'

class BooksApp extends Component {
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
