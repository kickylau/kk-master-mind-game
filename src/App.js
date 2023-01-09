import logo from './homer.png';
import './App.css';
//import { Modal } from "./Modal";
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import NavBar from './components/Navigation/NavBar';
//import ProtectedRoute from './components/auth/ProtectedRoute';
import Game from './components/Game/Game';
import SplashPage from './components/SplashPage/SplashPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/game' >
          <Game />
        </Route>
        <Route path='/' >
          <SplashPage />
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
