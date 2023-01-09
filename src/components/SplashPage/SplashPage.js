import "./SplashPage.css"
import logo from '../SplashPage/homer.png';

function SplashPage() {
    return (
        <>
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <button>
                       Enter Game
                    </button>
                </header>
            </div>
        </>
    )
}
export default SplashPage
