import React, { Component } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import Books from './components/books/Books'
import Search from './components/search/Search'
import './App.css'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Route exact path="/" component={Books} />
          <Route path="/search" component={Search} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
