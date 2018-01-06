import React from 'react'
import PropTypes from 'prop-types'
import BooksItem from './BooksItem'

const BooksList = (props) => {
  return (
    <ol className="books-grid">
      {props.books.length > 0 && props.books.map((book) => (
          <BooksItem key={book.id} {...book} handleSelectChange={props.handleSelectChange} />
      ))}
    </ol>
  )
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired
}

export default BooksList
