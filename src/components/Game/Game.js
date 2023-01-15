import "./Game.css"
import React, { useEffect, useState, useRef } from 'react'
import useSound from "use-sound";
import winningLogo from '../SplashPage/homer.png';
import losingLogo from "./doh.png";
import Row from "./Board/Row/Row.js"
import backgroundVideo from "./background-video.mp4";
import backgroundMusic from "./background-music.mp3";
import doh from "./doh.mp3";
import woohoo from "./woohoo.mp3";
import "nes.css/css/nes.min.css";
import Timer from "./Timer/Timer.js"


function Game() {


    const sizeLimit = 4

    const [randomCode, setRandomCode] = useState([]);
    const [answer, setAnswer] = useState("")
    const [guess, setGuess] = useState()
    const [counter, setCounter] = useState(10)
    const isMounted = useRef(false);
    const [showLosingModal, setShowLosingModal] = useState(false);
    const [showWinningModal, setShowWinningModal] = useState(false);
    const [showRulesModal, setShowRulesModal] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false)
    const [pegWhite, setPegWhite] = useState(0)
    const [pegBlack, setPegBlack] = useState(0)
    const [play, { stop, pause }] = useSound(backgroundMusic);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPausing, setIsPausing] = useState(false);
    const [isStopping, setIsStopping] = useState(false);


    //create a function and a button to trigger so that pass data to child
    //create a state to manage the data

    const [data, setData] = useState(new Array(10).fill([]))
    const [pegData, setPegData] = useState(new Array(10).fill([]))



    const playSong = () => {
        setIsPlaying(true);
        play()
    }

    const stopSong = () => {
        setIsPlaying(false);
        setIsStopping(true)
        stop()
    }

    const pauseSong = () => {
        setIsPlaying(false);
        setIsPausing(true);
        pause()
    }


    const passDataToRow = (guessArray) => {
        // console.log("guessArray", guessArray)
        // console.log("data", data)
        // let currBoardGuesses = [...{data}]
        //[[y,y,y,y],[r,r,r,r]]
        data[10 - counter] = guessArray
        //console.log("newData", data)

    }

    const passAnswerToRow = (pegArray) => {
        pegData[10 - counter] = pegArray
        // console.log("pegArray", pegArray)
    }


    //decrease counter
    const decrease = () => {
        setCounter(counter => counter - 1)
    }

    //reset counter
    const reset = () => {
        setCounter(10)
        setGuess([])
        setAnswer("")
        setShowResult(false)
        setData(new Array(10).fill([]))
        setPegData(new Array(10).fill([]))
    }

    //create map color vs. number
    const colorMap = {
        "blue": 0,
        "orange": 1,
        "purple": 2,
        "yellow": 3,
        "green": 4,
        "pink": 5,
        "caremel": 6,
        "brown": 7
    }

    const numberMap = {
        0: "blue",
        1: "orange",
        2: "purple",
        3: "yellow",
        4: "green",
        5: "pink",
        6: "caramel",
        7: "brown"
    }

    //function to enter guess
    function addToGuess(color) {
        //console.log("curr guess initially", { guess })
        //console.log("choosing ", color)
        let newGuess;
        if (counter > 0) {
            let num = colorMap[color]
            newGuess = { guess }.guess.concat(num)
            if (newGuess.length > sizeLimit) newGuess.splice(0, 1)
            setGuess(newGuess)
        }
        //pass data to row
        passDataToRow(newGuess)
        return newGuess;
    }



    //function to match the guess vs. result
    function numberGuess(code, guess) {
        //console.log({ randomCode }.randomCode)
        let correctPosAndColor = 0;
        let correctColorWrongPos = 0;
        let map = {};
        for (let num of code) {
            if (map[num] != null) map[num]++
            else map[num] = 1
        }

        for (let i = 0; i < guess.length; i++) {
            if (guess[i] == code[i]) {
                correctPosAndColor++
            }
            if (guess[i] in map && map[guess[i]] > 0) {
                correctColorWrongPos++
                map[guess[i]]--
            }
        }
        correctColorWrongPos = correctColorWrongPos - correctPosAndColor
        let res = "You have " + correctPosAndColor + " blacks and " + correctColorWrongPos + " whites."
        setAnswer(res)
        setShowAnswer(true)
        passAnswerToRow([correctPosAndColor, correctColorWrongPos])

        if (correctPosAndColor == sizeLimit) {
            setShowWinningModal(true)
            setShowResult(true)
        }
        return res
    }


    //fetch random number API
    const fetchData = async () => {
        const url = `https://www.random.org/integers/?num=${sizeLimit}&min=1&max=6&col=1&base=10&format=plain&rnd=new`

        try {
            const response = await fetch(url);
            const data = await response.text()
            //randomCode = data.split("\n")
            // console.log(randomCode)
            // console.log(answer)
            setRandomCode(data.split("\n").filter(e => e.length > 0).map(e => parseInt(e)))  //to only extract the 4 random number without empty string at the end of the array
            //console.log("i fire here")
        } catch (error) {
            console.log("error", error);
        }
    }

    //to only fire result once
    useEffect(() => {
        if (isMounted.current) return;
        isMounted.current = true;
        fetchData();
        //console.log("i fire once ")
        //return ()=> setRandomCode().abort()
    }, [])


    //??are those below necessary?? any way to simplify?
    useEffect(() => {
        setAnswer()
    }, [])

    useEffect(() => {
        setGuess([])
    }, [])

    useEffect(() => {
        setShowResult()
    }, [])


    return (
        <>

            <div className="container">
                <Timer/>
                {/* <h1>Result = {randomCode}</h1> */}
                <video autoPlay muted loop id="video"><source src={backgroundVideo} type="video/mp4" /></video>
                <div className="fa-solid fa-circle-pause"
                    onClick={isPlaying ? pauseSong : playSong}></div>

                <div className="fa-solid fa-circle-stop"
                    onClick={isPlaying ? stopSong : playSong}></div>

                <button className="nes-btn is-warning" id="rules" onClick={() => {
                    setShowRulesModal(true)
                }}>
                    RULES
                </button>

                {
                    showRulesModal && (
                        <div id="rules-modal-wrapper" onClick={() => { setShowRulesModal(false) }}>
                            <div id="rules-modal">
                                <div className="rules-container">
                                    <h2>How to play  . .<br></br></h2>

                                    1. Select challenge mode by clicking <b><font color="white">"LEVELS"</font></b> button.<br></br>
                                    <b>"Easy", "Medium", "Hard"</b> each represents rows of <b>4/5/6</b> donuts.<br></br><br></br>
                                    2. Click each colored donut on the side to create your guess until row is filled.<br></br><br></br>
                                    3. Then click the <b><font color="white">"GUESS"</font></b> button. You have <b><font color="red">10</font></b> tries.<br></br><br></br>
                                    4. Each guess shows black color peg with bart or/and white color peg with lisa.<img className="black-pegs" src={require(`./bart.png`)} /> <img className="white-pegs" src={require(`./lisa.png`)} /> <br></br><br></br>
                                    5. <img className="black-pegs" src={require(`./bart.png`)} /> A black color bart peg indicates one of your donuts is the <b><font color="red">RIGHT</font></b> color in the <b><font color="red">RIGHT</font></b> position.<br></br>
                                    <img className="white-pegs" src={require(`./lisa.png`)} /> A white color lisa peg indicates one of your donuts is the <b><font color="red">RIGHT</font></b> color in the <b><font color="red">WRONG</font></b> position.<br></br><br></br>
                                    6. Use the pegs to guide your next guess. If your guess shows 4/5/6 black bart pegs within 10 tries, you win.<br></br><br></br>
                                    7. Scores is calculated by timer. Winning with shorter time period and harder challenge mode will have higher scores.<br></br>
                                    Only winners will have chance to leave their names on the ranking.<br></br><br></br>
                                    9. To begin a new game click the <b><font color="white">"NEW GAME"</font></b> button.<br></br><br></br>

                                    ** You can pause/stop background music by clicking the top left buttons **
                                </div>
                            </div>
                        </div>
                    )}


                <div className="arcade-container">
                    <div className="body">
                        <div className="game-container">
                            <div className="controls">
                                <div>
                                    <button id="new-game" className="nes-btn is-primary" type="submit" onClick={() => {
                                        if (!isPlaying) {
                                            stop()
                                            playSong()
                                        }
                                        fetchData()
                                        reset()
                                        setShowResult(false)
                                    }
                                    }> NEW GAME</button>
                                </div>
                                <div>
                                    <button id="guess" className="nes-btn is-success" type="submit" onClick={() => {
                                        //disabled={data[10 - counter]?.length < 4 ? true : ""}
                                        if (counter > 0) {
                                            numberGuess({ randomCode }.randomCode, { guess }.guess)
                                            decrease()
                                        }
                                        if (counter == 1) {
                                            setShowLosingModal(true)
                                            setShowResult(true)
                                        }
                                        setGuess([])
                                    }
                                    }> GUESS </button>
                                </div>
                            </div>

                            <div className="monitor-container">
                                <div className="game-body">
                                    {[...Array(10)].map((x, idx) =>
                                        <Row key={`row-${idx}`}
                                            showAnswer={showAnswer}
                                            pegWhite={pegWhite}
                                            pegBlack={pegBlack}
                                            passDataToRow={data}
                                            passAnswerToRow={pegData}
                                            numberMap={numberMap}
                                            rowIdx={idx}
                                            sizeLimit={sizeLimit}
                                            isBlue={10 - counter == idx ? "blue" : ""}
                                            isGrey={10 - counter > idx ? " grey" : ""}
                                        />
                                    )}
                                </div>

                                <div className="donut-board">
                                    {Object.keys(colorMap).map((color) =>

                                        <div key={`code-${color}`} className="donut-board-tile" onClick={(e) => {
                                            if (!isPlaying && !isPausing && !isStopping) playSong()
                                            addToGuess(color)

                                        }}>
                                            {/* <p className="donut-board-p"></p> */}
                                            <img src={require(`./${colorMap[color]}.png`)} />
                                        </div>
                                        // each child in a list should have a unique key prop id={color}
                                        //require used for static imports .
                                        //{colorMap[color]}
                                    )}
                                </div>
                            </div>
                        </div>



                        {
                            showWinningModal &&
                            <div id="modal-wrapper" onClick={() => {
                                // setShowModal(false)
                                setShowWinningModal(false)
                                fetchData()
                                reset()
                            }}>
                                <div id="modal" >

                                    <div className="other" style={{ display: showResult ? "block" : "none" }}>
                                        <div className="code">
                                            {randomCode.map((number, idx) =>
                                                <div key={`code-${idx}`} className="secret-color" id={numberMap[number]}></div>
                                            )}
                                        </div>
                                    </div>



                                    <audio src={woohoo} autoPlay></audio>
                                    <div className="modal-text">WOO HOO <br></br> YOU WON !!</div>
                                    <img src={winningLogo} className="logo" alt="logo" />

                                </div>
                            </div>
                        }

                        {
                            showLosingModal &&
                            <div id="modal-wrapper" onClick={() => {
                                setShowLosingModal(false)
                                fetchData()
                                reset()
                            }}>
                                <div id="modal">

                                    <div className="other" style={{ display: showResult ? "block" : "none" }}>

                                        <div className="code">

                                            {randomCode.map((number, idx) =>
                                                <div key={`code-${idx}`} className="secret-color">
                                                    <img src={require(`./${number}.png`)}></img>
                                                </div>
                                            )}

                                        </div>
                                    </div>



                                    <audio src={doh} autoPlay></audio>
                                    <div className="modal-text">D' OH !! <br></br> YOU LOST </div>
                                    <img src={losingLogo} className="logo" alt="logo" />
                                </div>
                            </div>
                        }
                    </div>
                </div>


            </div>
        </>
    )
}

export default Game;
