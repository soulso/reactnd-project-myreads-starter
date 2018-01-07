import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksApi from '../../utils/BooksAPI'
import SearchInput from './SearchInput'
import BooksList from '../books/BooksList'
import Message from '../notifications/Message'
import { updateShelfBook, mergeShelfBooks } from '../../helpers/booksHelpers'
import sortBy from 'sort-by'
import { SHELF_NONE } from '../../utils/constants'

class Search extends Component {
  state = {
    books: [],
    query: '',
    message: {
      text: '',
      type: ''
    }
  }

  componentDidMount () {
    this._timeout = null
    BooksApi.getAll().then(res => {
      if(res.length > 0) {
        this._userBook = res
      }
    }).catch((err) => {
      this.setState({message: {text: 'An error occur', type: 'error'}})
    })
  }

  searchBooks = () => {
    BooksApi.search(this.state.query).then(res => {
      if(res.length > 0) {
        const books = mergeShelfBooks(res, this._userBook)
        books.sort(sortBy('title'))
        this.setState({
          books: books
        })
      }
    }).catch((err) => {
      this.setState({message: {text: 'An error occur', type: 'error'}})
    })
  }

  handleInputChange = (event) => {
    this.setState({
      query: event.target.value.trim()
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        clearTimeout(this._timeout)
        this._timeout = setTimeout(() => {
          this.searchBooks()
        }, 500)
      }else{
        this.setState({books: []})
      }
    })
  }

  handleSelectChange = (event, book) => {
    const shelf = event.target.value
    BooksApi.update(book, shelf).then(res => {
      const updatedBook = updateShelfBook(this.state.books, book, shelf)
      const successMessage = (shelf === SHELF_NONE) ?
        {message: {text: 'Book removed from list', type: 'warning'}}:
        {message: {text: 'Book moved successfully', type: 'success'}}
      this.setState(Object.assign({books: updatedBook}, successMessage))
    }).catch((err) => {
      this.setState({message: {text: 'An error occur', type: 'error'}})
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
          <Message text={this.state.message.text} type={this.state.message.type} />
          <BooksList books={this.state.books} handleSelectChange={this.handleSelectChange} />
        </div>
      </div>
    )
  }
}

export default Search
