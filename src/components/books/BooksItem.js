import React from 'react'
import PropTypes from 'prop-types'

const BooksItem = (props) => (
  <li>
    <div className="book">
      <div className="book-top">
        <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks.smallThumbnail})`}}></div>
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
      <div className="book-title">{props.title}</div>
      <div className="book-authors">
        {props.authors.map((author, index) => (
          <span key={index}>author</span>
        ))}
      </div>
    </div>
  </li>
)

BooksItem.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  imageLinks: PropTypes.object.isRequired,
  handleBookStatus: PropTypes.func.isRequired
}

export default BooksItem
