import React from 'react'
import PropTypes from 'prop-types'
import BooksList from './BooksList'

const BooksShelf = (props) => {
  return (
    <div className="bookshelf">
      <h2 className="bookshelf-title">{props.title}</h2>
      <div className="bookshelf-books">
        <BooksList
          books={props.books}
          handleSelectChange={props.handleSelectChange}
        />
      </div>
    </div>
  )
}

BooksShelf.propTypes = {
  books: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  handleSelectChange: PropTypes.func.isRequired
}

export default BooksShelf
