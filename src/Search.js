import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksApi from './BooksAPI'
import SearchResult from './SearchResult'

class Search extends Component {
  state = {
    books: [],
    query: ''
  }

  searchBooks = () => {
    BooksApi.search(this.state.query).then(books => {
      this.setState({
        books: books
      })
    })
  }

  handleInputChange = (query) => {
    this.setState({
      query: query.trim()
    }, () => {
      if (this.state.query && this.state.query.length > 1) {
        if (this.state.query.length % 2 === 0) {
          this.searchBooks()
        }
      }
    })
  }

  render() {
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input
              type="text"
              value={this.state.query}
              onChange={event => this.handleInputChange(event.target.value)}
              placeholder="Search by title or author"/>

          </div>
        </div>
        <SearchResult books={this.state.books}/>
      </div>
    )
  }
}

export default Search
