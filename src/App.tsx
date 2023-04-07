import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Advice from './components/advice/Advice';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Jokes from './components/jokes/Jokes';
import Main from './components/main/Main';
import Facts from './components/facts/Facts';
import Categories from './components/categories/Categories';


function App() {

  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/aforism/" element={<Main />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/facts" element={<Facts />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
