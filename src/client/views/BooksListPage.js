import React from 'react'
import BookShelf from './components/BookShelf'
import {Link} from 'react-router-dom'

const BooksList = (props) => {
  let {books, handleShelfChange} = props;
  return (
    <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf 
                  shelfTitle='Currently Reading' 
                  books={books.filter(book => book.shelf === "currentlyReading")}
                  id="currentlyReading"
                  key="currentlyReading"
                  onShelfChange={handleShelfChange}
                  />
                <BookShelf 
                  shelfTitle='Want To Read' 
                  books={books.filter(book => book.shelf === "wantToRead")}
                  id="wantToReading"
                  key="wantToReading"
                  onShelfChange={handleShelfChange}
                />
                <BookShelf 
                  shelfTitle='Read' 
                  books={books.filter(book => book.shelf === "read")}
                  id="read"
                  key="read"
                  onShelfChange={handleShelfChange}
                />
              </div>
            </div>
            <Link to='/search' className="open-search">
              <button >
                Add a book
              </button>
            </Link>
          </div>
  )
}

export default BooksList;