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
