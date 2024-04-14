import React from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import MainPage from './pages/mainPage/MainPage';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<Home></Home>}></Route>
          <Route exact path='/' element={<HomePage></HomePage>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
