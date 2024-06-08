import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './Navbar';
import Home from './Home';
import Footer from './Footer';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app">
        <NavigationBar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
