import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksApi from '../../utils/BooksAPI'
import SearchInput from './SearchInput'
import BooksList from '../books/BooksList'
import { updateShelfBook } from '../../helpers/booksHelpers'
import sortBy from 'sort-by'

class Search extends Component {
  state = {
    books: [],
    userBooks: [],
    query: ''
  }

  componentDidMount () {
    BooksApi.getAll().then(books => {
      this.setState({
        userBooks: books
      })
    })
  }

  searchBooks = () => {
    BooksApi.search(this.state.query).then(res => {
      const books = Object.assign(res, this.state.userBooks)
      books.sort(sortBy('title'))
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
        this.searchBooks()
      }else{
        this.setState({
          books: []
        })
      }
    })
  }

  handleSelectChange = (event, book) => {
    const shelf = event.target.value
    const prevShelf = book.shelf
    updateShelfBook(this.state.books, book, shelf)
    BooksApi.update(book, shelf).then(res => {
      // success message
    }).catch((err) => {
      // error message
      updateShelfBook(this.state.books, book, prevShelf)
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
          <BooksList books={this.state.books} handleSelectChange={this.handleSelectChange} />
        </div>
      </div>
    )
  }
}

export default Search
