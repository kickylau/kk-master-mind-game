import React from "react";
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import "./SplashPage.css";
import "../../assets/fonts/Simpsonfont.ttf";
import logo from "../../assets/img/logo.png";
import enterSound from "../../assets/audioAndVideo/enterSound.mp3";
import backgroundMusic from "../../assets/audioAndVideo/backgroundMusic2.mp3";

function SplashPage() {
  const [play, { stop }] = useSound(enterSound);
  const navigate = useNavigate();
  const routeChange = () => {
    const path = "/game";
    navigate(path);
  };

  return (
    <>
      <div className="splash-container">
        <header className="splash-header">
          <h1 id="simpson" onClick={routeChange}>
            Kicky's <br></br>
            <br></br> SIMPSONS MASTERMIND
          </h1>
          <img src={logo} className="logo" alt="logo" onClick={routeChange} />

          <div
            id="enterGame"
            onMouseEnter={() => {
              play();
            }}
            onMouseLeave={() => {
              stop();
            }}
            onClick={routeChange}
          >
            Enter Game
          </div>

          <audio src={backgroundMusic} autoPlay></audio>
        </header>
      </div>
    </>
  );
}
export default SplashPage;
