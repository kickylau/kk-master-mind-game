import logo from './homer.png';
import './App.css';
//import { Modal } from "./Modal";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import NavBar from './components/Navigation/NavBar';
//import ProtectedRoute from './components/auth/ProtectedRoute';
import Game from './components/Game/Game';
import SplashPage from './components/SplashPage/SplashPage';
//import { Modal } from "./Modal";


function App() {





  return (
    <BrowserRouter>
      <Routes>
        <Route path='/game' element={<Game />} />


        <Route path='/' element={<SplashPage />} />

      </Routes>
    </BrowserRouter>

  );
}

export default App;
