import React from "react";
import {Route} from "react-router-dom"
import * as BooksAPI from './js/BooksAPI'

import "./App.css";
import BooksList from "./views/BooksListPage"
import SearchPage from './views/SearchPage'

class BooksApp extends React.Component {
  state = {
    books: [],
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false
  };

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState(() => ({
        books
      }))
    })
  }

  handleShelfChange = (bookId, e) => {
    let {books} = this.state;
    const book = books.filter(b => b.id === bookId)[0];
    book.shelf = e.target.value;
    BooksAPI.update(book, e.target.value).then(response => {
      this.setState({
        books
      });
    });
  };

  render() {
    let {books} = this.state
    console.log(books)
    return (
      
      <div className="app">
        <Route exact path='/' render={() => (
          <BooksList 
            books={books} 
            handleShelfChange={this.handleShelfChange}
          />
        )} />

        <Route path='/search' render={() => (
          <SearchPage />
        )}/>

      </div>
    );
  }
}

export default BooksApp;
