import { Nav } from '../Navigate';
import RedirectIf from '../Components/Redirect';
import { checkIsLoggedIn } from '../utils/checkIsLoggedIn';
import { useState } from 'react';
import { useEffect } from 'react';
import { getAllBooks } from '../apiCalls/getAllBooks';

function Homepage() {
  const isLoggedIn = checkIsLoggedIn();
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    getAllBooks().then(data => {
      setBooks(data);
    });
  }, []);

  useEffect(() => {
    const filteredBooks = getAllBooks().then(data => {
      return data.filter(book => {
        return book.title.toLowerCase().includes(search.toLowerCase());
      });
    });

    console.log('filteredBooks', filteredBooks);

    filteredBooks.then(filteredData => {
      setBooks(filteredData);
    });
  }, [search]);

  function handleSearch(e) {
    setSearch(e.target.value);
  }

  console.log('books', books);

  return (
    <>
      <RedirectIf
        isLoggedIn={!isLoggedIn}
        to='/signin'
      />
      <Nav />
      <input
        type='text'
        placeholder='Search'
        value={search}
        onChange={handleSearch}
      />
      <div className='books'>
        {books?.map(book => {
          return (
            <div
              key={book.id}
              className='bookCard'
            >
              <h2 className='bookTitle'>{book.title}</h2>
              <img
                src={book.image}
                className='bookImage'
                alt={book.title}
              />
              <p className='bookDescription'>{book.description}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Homepage;
