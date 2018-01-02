import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksApi from '../../utils/BooksAPI'
import SearchInput from './SearchInput'
import BooksList from '../books/BooksList'

class Search extends Component {
  state = {
    books: [],
    query: ''
  }

  componentDidMount () {
    BooksApi.getAll().then(books => {
      this.setState({
        books: books
      })
    })
  }

  searchBooks = () => {
    BooksApi.search(this.state.query).then(books => {
      this.setState({
        books: books
      })
    })
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value.trim()
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.searchBooks()
        }
      }
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <SearchInput handleInputChange={this.handleInputChange} query={this.state.query}/>
        </div>
        <div className="search-books-results">
          <BooksList books={this.state.books}/>
        </div>
      </div>
    )
  }
}

export default Search
