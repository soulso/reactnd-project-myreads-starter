import React, { Component } from 'react'
import * as BooksApi from '../../utils/BooksAPI'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'
import { updateShelfBook, removeBook } from '../../helpers/booksHelpers'
import {
  SHELF_CURRENTLY_READING,
  SHELF_WANT_TO_READ,
  SHELF_READ,
  SHELF_NONE
} from '../../utils/constants'

class Books extends Component {
  state = {
    books:[],
    errorMessage: ''
  }

  componentDidMount () {
    BooksApi.getAll().then(books => {
      this.setState({
        books:books
      })
    })
  }

  updateBook (books, book, shelf) {
    if(shelf === SHELF_NONE){
      removeBook(books, book.id)
    }else{
      updateShelfBook(books, book, shelf)
    }
  }

  handleSelectChange = (event, book) => {
    const shelf = event.target.value
    const prevShelf = book.shelf
    const newState = this.updateBook(this.state.books, book, shelf)
    this.setState({newState})
    BooksApi.update(book, shelf).then(res => {
      // success message
    }).catch((err) => {
      // error message
      const prevState = this.updateBook(this.state.books, book, prevShelf)
      this.setState({prevState})
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <BooksShelf
              title="Currently Reading"
              books={this.state.books.filter(book => book.shelf === SHELF_CURRENTLY_READING)}
              handleSelectChange={this.handleSelectChange}
            />
            <BooksShelf
              title="Want to Read"
              books={this.state.books.filter(book => book.shelf === SHELF_WANT_TO_READ)}
              handleSelectChange={this.handleSelectChange}
            />
            <BooksShelf
              title="Read"
              books={this.state.books.filter(book => book.shelf === SHELF_READ)}
              handleSelectChange={this.handleSelectChange}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to="/search">Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Books
