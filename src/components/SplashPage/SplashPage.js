import "./SplashPage.css"
//import logo from '../SplashPage/homer.png';
import logo from "./logo.png";
import "../../fonts/Simpsonfont.ttf";

function SplashPage() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <h1 id="simpson"> THE  SIMPSONS  MASTERMIND</h1>
                </header>
            </div>
            <div>
                <div id="enterGame">Enter Game</div>
            </div>
            <div>
                <img src={logo} className="App-logo" alt="logo" />
            </div>
        </>
    )
}
export default SplashPage
