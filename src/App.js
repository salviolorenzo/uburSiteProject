import React, { useState } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/header/header';
import Footer from './components/footer/footer';
import Home from './components/home/home';
import About from './components/about/about';
import Shop from './components/shop/shop';
import Login from './components/login/login';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Route path="/home" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/shop" component={Shop} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
