import React, { Component } from 'react'
import * as BooksApi from '../../utils/BooksAPI'
import { Link } from 'react-router-dom'
import BooksShelf from './BooksShelf'
import Message from '../notifications/Message'
import { updateShelfBook, removeBook } from '../../helpers/booksHelpers'
import sortBy from 'sort-by'
import {
  SHELF_CURRENTLY_READING,
  SHELF_WANT_TO_READ,
  SHELF_READ,
  SHELF_NONE
} from '../../utils/constants'

class Books extends Component {
  state = {
    books:[],
    message: {
      text: '',
      type: ''
    }
  }

  componentDidMount () {
    BooksApi.getAll().then(res => {
      if(res.length > 0) {
        res.sort(sortBy('title'))
        this.setState({
          books:res
        })
      }
    }).catch((err) => {
      this.setState({message: {text: 'An error occur', type: 'error'}})
    })
  }

  updateBook (books, book, shelf) {
    return (shelf === SHELF_NONE)?
      removeBook(books, book.id):
      updateShelfBook(books, book, shelf)
  }

  handleSelectChange = (event, book) => {
    const shelf = event.target.value
    const prevShelf = book.shelf
    const newState = this.updateBook(this.state.books, book, shelf)
    this.setState({books: newState})
    BooksApi.update(book, shelf).then(res => {
      const successMessage = (shelf === SHELF_NONE) ?
        {message: {text: 'Book removed from library', type: 'warning'}}:
        {message: {text: 'Book moved successfully', type: 'success'}}
      this.setState(successMessage)
    }).catch((err) => {
      const prevState = this.updateBook(this.state.books, book, prevShelf)
      const errorMessage = {message: {text: 'An error occur', type: 'error'}}
      this.setState(Object.assign({books: prevState}, errorMessage))
    })
  }

  render() {
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <Message text={this.state.message.text} type={this.state.message.type} />
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
