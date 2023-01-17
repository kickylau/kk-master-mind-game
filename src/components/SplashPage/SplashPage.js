import "./splashPage.css"
import logo from "./logo.png";
import "../../fonts/Simpsonfont.ttf";
import backgroundMusic from "./backgroundMusic.mp3";
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import useSound from "use-sound";
import enterSound from "./enterSound.mp3";

function SplashPage() {
    const [play, { stop }] = useSound(enterSound);
    const [isHovering, setIsHovering] = useState(false);

    const navigate = useNavigate();
    const routeChange = () => {
        const path = '/game';
        navigate(path);
    }

    // console.log("played!")
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 id="simpson">Kicky's <br></br> SIMPSONS  MASTERMIND</h1>
                    <img src={logo} className="logo" alt="logo" onClick={routeChange} />

                    <div id="enterGame"
                        onMouseEnter={() => {
                            setIsHovering(true);
                            play()
                        }}

                        onMouseLeave={() => {
                            setIsHovering(false);
                            stop();

                        }}

                        onClick={routeChange}>
                        Enter Game</div>

                    <audio src={backgroundMusic} autoPlay></audio>
                </header>
            </div>

        </>
    )
}
export default SplashPage
