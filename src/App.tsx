import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Advice from './components/advice/Advice';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import Jokes from './components/jokes/Jokes';
import Main from './components/main/Main';
import Facts from './components/facts/Facts';


function App() {
  
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/advice" element={<Advice />} />
          <Route path="/jokes" element={<Jokes />} />
          <Route path="/facts" element={<Facts />} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
