import {updateShelfBook, removeBook, mergeShelfBooks} from './booksHelpers'

test('updateShelfBook should not mutate the original books array', () => {
  const books = [
    {id:1, title: 'book one', shelf: 'none'},
    {id:2, title: 'book two', shelf: 'none'},
    {id:3, title: 'book three', shelf: 'none'}
  ]
  const bookToUpdate = {id:2, title: 'two', shelf: 'none'}

  const shelfUpdate = 'read'

  const result = updateShelfBook(books, bookToUpdate, shelfUpdate)

  expect(result).not.toBe(books)
})


test('removeBook should not mutate the original books array', () => {
  const books = [
    {id:1, title: 'book one', shelf: 'none'},
    {id:2, title: 'book two', shelf: 'none'},
    {id:3, title: 'book three', shelf: 'none'}
  ]
  const bookId = 2
  const result = removeBook(books, bookId)

  expect(result).not.toBe(books)
})

test('mergeShelfBooks should not mutate the original books array', () => {
  const books = [
    {id:1, title: 'book one'},
    {id:2, title: 'book two'},
    {id:3, title: 'book three'}
  ]
  const bookToUpdate = [{id:2, title: 'two', shelf: 'read'}]

  const result = mergeShelfBooks(books, bookToUpdate)

  expect(result).not.toBe(books)
})
