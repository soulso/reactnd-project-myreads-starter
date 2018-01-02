import React from 'react'
import PropTypes from 'prop-types'

const BookItem = (props) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.book.imageLinks.smallThumbnail})`}}></div>
        <div className="book-shelf-changer">
          <select onChange={props.handleBookStatus}>
            <option value="none" disabled>Move to...</option>
            <option value="currentlyReading">Currently Reading</option>
            <option value="wantToRead">Want to Read</option>
            <option value="read">Read</option>
            <option value="none">None</option>
          </select>
        </div>
      </div>
      <div className="book-title">{props.book.title}</div>
      <div className="book-authors">{props.book.authors.map(author => (
          author
      ))}</div>

    </div>
  </li>
)

BookItem.propTypes = {
  book: PropTypes.object.isRequired,
  handleBookStatus: PropTypes.func.isRequired
}

export default BookItem
