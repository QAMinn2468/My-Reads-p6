import React, { Component } from 'react'
import BookshelfChanger from './BookshelfChanger'
<<<<<<< HEAD
// books={[wr]}
||||||| merged common ancestors

=======
import { Spine } from './Spine.js'

>>>>>>> master

class WantToRead extends Component {
  render() {
    const library = this.props.books
    return(
      <div className="bookshelf2">
        <h2 className="bookshelf-title">Books I Want to Read</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
<<<<<<< HEAD
            {library.map(book => (
            <li key={book.title}>
              <div className="book">
                <div className="book-top">
                <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: `url(${book.backgroundImage})` }}></div>
                  <BookshelfChanger />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.authors}</div>
              </div>
            </li>
          ))}
||||||| merged common ancestors
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: 'url("http://books.google.com/books/content?id=uu1mC6zWNTwC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE73pGHfBNSsJG9Y8kRBpmLUft9O4BfItHioHolWNKOdLavw-SLcXADy3CPAfJ0_qMb18RmCa7Ds1cTdpM3dxAGJs8zfCfm8c6ggBIjzKT7XR5FIB53HHOhnsT7a0Cc-PpneWq9zX&source=gbs_api")' }}></div>
                  <BookshelfChanger />
                </div>
                <div className="book-title">1776</div>
                <div className="book-authors">David McCullough</div>
              </div>
            </li>
            <li>
              <div className="book">
                <div className="book-top">
                  <div className="book-cover" style={{ width: 128, height: 192, backgroundImage: 'url("http://books.google.com/books/content?id=wrOQLV6xB-wC&printsec=frontcover&img=1&zoom=1&imgtk=AFLRE72G3gA5A-Ka8XjOZGDFLAoUeMQBqZ9y-LCspZ2dzJTugcOcJ4C7FP0tDA8s1h9f480ISXuvYhA_ZpdvRArUL-mZyD4WW7CHyEqHYq9D3kGnrZCNiqxSRhry8TiFDCMWP61ujflB&source=gbs_api")' }}></div>
                  <BookshelfChanger />
                </div>
                <div className="book-title">Harry Potter and the Sorcerer's Stone</div>
                <div className="book-authors">J.K. Rowling</div>
              </div>
            </li>
=======
            <Spine />
>>>>>>> master
          </ol>
        </div>
      </div>
    )
  }
}

export default WantToRead
