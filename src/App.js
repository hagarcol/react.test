import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavbarComponent from './layout/Navbar';
import Footer from './layout/Footer';
import HomeMain from './layout/Home';
import FAQsComponent from './layout/FAQs';
import VeilToken from './layout/Token';
import Revenue from './layout/Revenue';

function App() {
  return (
    <Router>
      <NavbarComponent />
      <Routes>
        <Route path="/" element = {<HomeMain />} />
        <Route path="/faqs" element = {<FAQsComponent />} />
        <Route path='/token' element = {<VeilToken />} />
        <Route path='/revenue' element = {<Revenue />} />
      </Routes> 
      <Footer />
    </Router>
  );
}

export default App;
