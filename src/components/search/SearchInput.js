import React from 'react'
import PropTypes from 'prop-types'

const SearchInput = (props) => {
  const {query, handleInputChange} = props
  return (
    <div className="search-books-input-wrapper">
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search by title or author"/>
    </div>
  )
}

SearchInput.propTypes = {
  query: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired
}

export default SearchInput
