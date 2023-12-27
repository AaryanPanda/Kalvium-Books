import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Nav from './Nav';
import Bookstore from './Bookstore';
import Register from './Register';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div>
      <Nav setSearchTerm={setSearchTerm} />
      <Routes>
        <Route path="/" element={<Bookstore query={searchTerm} />} />
        <Route path="/Registration" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
