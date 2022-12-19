// import logo from './logo.svg';
import React from 'react'
import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
// import { Routes, Route } from "react-router-dom";
import MainPage from './pages/mainPage.jsx'
import Contact from './pages/contact/contact-card';
import Blog from './pages/blog-post-4'
import {
  BrowserRouter as Router,
  // Switch,
  Route,
  // Link,
  Routes,
} from "react-router-dom";

function App() {
  // const [page, setPage] = useState('Home')


  return (
    <div className="body">
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
