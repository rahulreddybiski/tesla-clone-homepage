import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import ReactLoading from "react-loading";
function App() {

  return (
    <div className="App">
      
      <Header />
      <Home />
    </div>
  );
}

export default App;
