import React from 'react'
import PropTypes from 'prop-types'
import BooksItem from './BooksItem'

const BooksList = (props) => {
  const {books, handleSelectChange} = props
  return (
    <ol className="books-grid">
      {books.length > 0 && books.map((book) => (
          <BooksItem key={book.id} {...book} handleSelectChange={handleSelectChange} />
      ))}
    </ol>
  )
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  handleSelectChange: PropTypes.func.isRequired
}

export default BooksList
