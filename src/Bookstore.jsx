// Bookstore.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Bookstore.css';
import './App.css';
import { FaStar } from "react-icons/fa6";

const Bookstore = ({ query,books }) => {
  const [bookName, setBookName] = useState([]);

  useEffect(() => {
    axios
      .get('https://reactnd-books-api.udacity.com/books', {
        params: {
          filter: query,
        },
        headers: {
          'Authorization': 'whatever-you-want',
        },
      })
      .then((response) => {
        setBookName(response.data.books);
        console.log(response.data);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [query]);

  const link = 'https://user-images.githubusercontent.com/24848110/33519396-7e56363c-d79d-11e7-969b-09782f5ccbab.png';

  return (
    <>
      <div>
        <div id="quotation-container">
          <div id="quotation">
            <p id="quote">A room without books is like a body without a soul.</p>
            <p id="writer">— Marcus Tullius Cicero</p>
          </div>
        </div>
        <div id="welcome-container">
          <div id="welcome">
            <p id="content">Welcome to a haven where stories come alive, and the magic of words unfolds on every page. <br />In this digital realm, we invite you to embark on a literary journey that transcends time and space. <br /> Our shelves are lined with tales of adventure, wisdom, romance, and mystery, offering a diverse range of voices.</p>
          </div>
        </div>
        <div id="browse">
          <p>Browse through our virtual shelves, discover hidden gems!</p>
        </div>
      </div>
      <div id='main'>
        <div id='books'>
          {!bookName.error
            ? bookName
                .filter((book) => book.title.toLowerCase().includes(query.toLowerCase()))
                .map((book) => (
                  <div id='book-div' key={book.id} className='book-div'>
                    <img id='book-img' src={book.imageLinks?.thumbnail ? book.imageLinks.thumbnail : link} alt="book" />
                    <h5 id='book-title'>{book.title}</h5>
                    <div id='book-details'>
                      <p id='book-rating'><span id='rate'>{book.averageRating  ? book.averageRating : 3.8}<FaStar id='stari' fill='gold' /></span>  <span id='free'>Free</span> </p>
                      
                    </div>
                  </div>
                ))
            : <p id='not-msg'>Book Not Found</p>}
        </div>
      </div>
      <hr  id='footer-line'/>
   <footer id='footer'>

      <p>Designed And Developed By: <b>Aaryan Panda</b></p>
      <p>Data From: <b>reactnd-books-api</b></p>
   </footer>
    

    </>
  );
};

export default Bookstore;
