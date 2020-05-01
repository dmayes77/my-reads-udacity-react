import React from 'react';

const BookShelf = (props) => {
	let {shelfTitle, books, id, onShelfChange} = props
	return (
		<div id={id} className='bookshelf'>
			<h2 className='bookshelf-title'>{shelfTitle}</h2>
			<div className='bookshelf-books'>
				<ol className='books-grid'>
					{books.map(book => (
						<li key={book.id}>
						<div className='book'>
							<div className='book-top'>
								<div
									className='book-cover'
									style={{
										width: 128,
										height: 193,
										backgroundImage:
											`url(${book.imageLinks.thumbnail})`,
									}}
								/>
								<div className='book-shelf-changer'>
									<select value={book.shelf} onChange={e => onShelfChange(book.id, e)}>
										<option value='move' disabled>
											Move to...
										</option>
										<option value='currentlyReading'>Currently Reading</option>
										<option value='wantToRead'>Want to Read</option>
										<option value='read'>Read</option>
										<option value='none'>None</option>
									</select>
								</div>
							</div>
								<div className='book-title'>{book.title}</div>
								<div className='book-authors'>{book.author}</div>
						</div>
					</li>
					))}
				</ol>
			</div>
		</div>
	);
};

export default BookShelf;