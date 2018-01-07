export const updateShelfBook = (books, book, shelf) => (
  books.map(b => {
    if(b.id === book.id) {
      b.shelf = shelf
    }
    return b
  })
)

export const removeBook = (books, bookId) => (
  books.filter(b => b.id !== bookId)
)

export const mergeShelfBooks = (books, userBooks) => (
  books.map((book) => {
      userBooks.filter(b => {
        if(b.id === book.id){
          book.shelf=b.shelf
        }
        return b
      })
      return book
    })
)
