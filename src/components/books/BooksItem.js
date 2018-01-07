import React from 'react'
import PropTypes from 'prop-types'
import {
  SHELF_CURRENTLY_READING,
  SHELF_WANT_TO_READ,
  SHELF_READ,
  SHELF_NONE
} from '../../utils/constants'

const BooksItem = (props) => {
  const {title, imageLinks, authors, shelf, handleSelectChange} = props
  const currentShelf = (props.shelf)?shelf:SHELF_NONE
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${imageLinks.smallThumbnail})`}}></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => handleSelectChange(e, props)} defaultValue={currentShelf}>
              <option value={SHELF_NONE} disabled>Move to...</option>
              <option value={SHELF_CURRENTLY_READING}>Currently Reading</option>
              <option value={SHELF_WANT_TO_READ}>Want to Read</option>
              <option value={SHELF_READ}>Read</option>
              <option value={SHELF_NONE}>None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{title}</div>
        <div className="book-authors">
          {authors.length > 0 && authors.map((author, index) => (
            <span key={index}>{author}</span>
          ))}
        </div>
      </div>
    </li>
  )
}

BooksItem.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  imageLinks: PropTypes.object.isRequired,
  handleSelectChange: PropTypes.func.isRequired,
  shelf: PropTypes.string
}

export default BooksItem
