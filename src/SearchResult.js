import React from 'react'
import PropTypes from 'prop-types'
import BookItem from './BookItem'

const SearchResult = (props) => {
  return (
    <div className="search-books-results">
      <ol className="books-grid">
        {props.books.length > 0 && props.books.map((book) => (
            <BookItem key={book.id} book={book} handleBookStatus={() => {}} />
        ))}
      </ol>
    </div>
  )
}

SearchResult.propTypes = {
  books: PropTypes.array.isRequired
}

export default SearchResult
