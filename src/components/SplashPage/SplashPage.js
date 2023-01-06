//import { useSelector } from 'react-redux';
import "./SplashPage.css"
//import background from "./background.jpg";
import logo from '../SplashPage/homer.png';



function SplashPage() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <p>
                        whatup
                    </p>
                </header>
            </div>
        </>
    )
}
export default SplashPage
