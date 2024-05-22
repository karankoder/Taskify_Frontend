import React from 'react';
import './App.css';
import HomePage from './pages/homePage/HomePage';
import MainPage from './pages/mainPage/MainPage';
import Register from './pages/register/Register';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

export const server = 'http://localhost:4000/api';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path='/' element={<HomePage></HomePage>}></Route>
          <Route exact path='/register' element={<Register></Register>}></Route>
          <Route exact path='/main' element={<MainPage></MainPage>}></Route>
        </Routes>
        <Toaster />
      </Router>
    </>
  );
}

export default App;
