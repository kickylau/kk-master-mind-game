import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Game from './components/Game/Game';
import SplashPage from './components/SplashPage/SplashPage';


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
