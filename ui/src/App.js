import React from 'react';
// import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/homePage/navbar';
import Search from './components/homePage/search';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Search />
    </div>
  );
}

export default App;
