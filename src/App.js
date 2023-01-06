import logo from './homer.png';
import './App.css';
import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
//import { useDispatch } from 'react-redux';
//import NavBar from './components/Navigation/NavBar';
//import ProtectedRoute from './components/auth/ProtectedRoute';
// import Game from './components/Game';
import SplashPage from './components/SplashPage/SplashPage';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        {/* <Route path='/game' >
          <Game />
        </Route> */}
        <Route path='/' >
          <SplashPage />
        </Route>
        {/* <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              whatup
            </p>
          </header>
        </div> */}
      </Switch>
    </BrowserRouter>

  );
}

// function App() {
//   return (
//     // <BrowserRouter>
//       {/* <NavBar/> */}
//       {/* <Switch> */}
//       {/* <ProtectedRoute path='/game' >
//           <Game />
//         </ProtectedRoute> */}
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             whatup
//           </p>
//         </header>
//       </div>
//       {/* </Switch> */}
//     {/* </BrowserRouter> */}
//   );
// }

export default App;
