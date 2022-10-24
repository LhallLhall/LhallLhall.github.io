// import logo from './logo.svg';
import React from 'react'
import {useState} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import MainPage from './pages/mainPage.jsx'


function App() {
  const [page, setPage] = useState('Home')


  return (
    <div className="body">
      <MainPage page={page} setPage={setPage}/>
    </div>
  );
}

export default App;
