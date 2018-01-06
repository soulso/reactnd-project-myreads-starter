import React from 'react'
import PropTypes from 'prop-types'
import {
  SHELF_CURRENTLY_READING,
  SHELF_WANT_TO_READ,
  SHELF_READ,
  SHELF_NONE
} from '../../utils/constants'

const BooksItem = (props) => {
  return (
    <li>
      <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${props.imageLinks.smallThumbnail})`}}></div>
          <div className="book-shelf-changer">
            <select onChange={(e) => props.handleSelectChange(e, props)} defaultValue={props.shelf}>
              <option value={SHELF_NONE} disabled>Move to...</option>
              <option value={SHELF_CURRENTLY_READING}>Currently Reading</option>
              <option value={SHELF_WANT_TO_READ}>Want to Read</option>
              <option value={SHELF_READ}>Read</option>
              <option value={SHELF_NONE}>None</option>
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
}

BooksItem.propTypes = {
  title: PropTypes.string.isRequired,
  authors: PropTypes.array.isRequired,
  imageLinks: PropTypes.object.isRequired,
  shelf: PropTypes.string.isRequired
}

export default BooksItem
