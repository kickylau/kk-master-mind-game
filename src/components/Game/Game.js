import "./game.css"
import React, { useEffect, useState, useRef } from 'react'
import useSound from "use-sound";
import winningLogo from "../../assets/img/wooHoo.png";
import losingLogo from "../../assets/img/doh.png";
import Row from "./Board/Row/Row.js"
import backgroundVideo from "../../assets/audioAndVideo/backgroundVideo.mp4";
import backgroundMusic from "../../assets/audioAndVideo/backgroundMusic.mp3";
import click from "../../assets/audioAndVideo/click.mp3";
import doh from "../../assets/audioAndVideo/doh.mp3";
import wooHoo from "../../assets/audioAndVideo/wooHoo.mp3";
import donutClick from "../../assets/audioAndVideo/donutClick.mp3";
import "nes.css/css/nes.min.css";
import Timer from "./Timer/Timer.js"
import ChallengeMode from "./ChallengeMode/ChallengeMode";


function Game() {


    const [randomCode, setRandomCode] = useState([]);
    const [answer, setAnswer] = useState("")
    const [guess, setGuess] = useState([])
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
    const [play2] = useSound(click);
    const [play3] = useSound(donutClick);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isPausing, setIsPausing] = useState(false);
    const [isStopping, setIsStopping] = useState(false);
    const [sizeLimit, setSizeLimit] = useState(4);
    const [startTimer, setStartTimer] = useState(false);
    const [pauseTimer, setPauseTimer] = useState(false);
    //create a function and a button to trigger so that pass data to child
    //create a state to manage the data
    const [data, setData] = useState(new Array(10).fill([]))
    const [pegData, setPegData] = useState(new Array(10).fill([]))
    //const [clear, setClear] = useState(false);


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

    //const alertFn = () => { alert("hi") }

    //reset counter
    const reset = () => {
        //console.log("reset! sizeLimit is: ", sizeLimit)

        setStartTimer(false)
        setPauseTimer(false)
        setCounter(10)
        setGuess([])
        setAnswer("")
        setShowResult(false)
        setData(new Array(10).fill([]))
        setPegData(new Array(10).fill([]))
        fetchData()
    }

    // const resetWithSizeLimit = (_sizeLimit) => {
    //     console.log("reset with size limit! sizeLimit: ", sizeLimit, " change to: ", _sizeLimit)
    //     setSizeLimit(prevSizeLimit => (_sizeLimit))
    //     console.log("part 2 sizeLimit: ", sizeLimit)
    //     reset()
    // }

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
        setStartTimer(true)
        // console.log(sizeLimit)
        //console.log("curr guess initially", { guess })
        //console.log("choosing ", color)
        let newGuess;
        if (counter > 0) {
            let num = colorMap[color]
            newGuess = { guess }.guess.concat(num)
            // console.log(setClear,setGuess)
            // if (setClear) setGuess([])
            // console.log(setClear,setGuess)
            if (newGuess.length <= sizeLimit) {
                // newGuess.splice(0, 1)
                setGuess(newGuess)
            }
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
            if (guess[i] === code[i]) {
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

        if (correctPosAndColor === sizeLimit) {
            setShowWinningModal(true)
            setShowResult(true)
            setStartTimer(false)
            setPauseTimer(true)
        }
        return res
    }


    //fetch random number API
    const fetchData = async () => {
        //console.log("fetchData sizeLimit: ", sizeLimit)
        const url = `https://www.random.org/integers/?num=${sizeLimit}&min=0&max=7&col=1&base=10&format=plain&rnd=new`

        try {
            const response = await fetch(url);
            const data = await response.text()
            //randomCode = data.split("\n")
            //console.log(data.split("\n"))
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

    useEffect(() => {
        setSizeLimit(4)
    }, [])

    // useEffect(() => {
    //    setSizeLimit(4)
    // }, [])
    // console.log("size limit", sizeLimit)  //its showing sync upate of size limit

    // useEffect(() => {
    //    console.log(sizeLimit)
    //  }, [sizeLimit])   //its also showing sync update of size limti

    // useEffect(() => {
    //     const newlimit = sizeLimit
    //     console.log(newlimit)
    //     setSizeLimit(newlimit)
    //   }, [])     //not showing




    return (
        <>
            <h1>{randomCode}</h1>
            {/* <h6> {answer} </h6> */}
            <h6> {guess} </h6>
            <div className="container">
                <Timer
                    startTimer={startTimer}
                    pauseTimer={pauseTimer}
                />

                < video autoPlay muted loop id="video"><source src={backgroundVideo} type="video/mp4" /></video>
                <div className="fa-solid fa-circle-pause"
                    onClick={isPlaying ? pauseSong : playSong}></div>

                <div className="fa-solid fa-circle-stop"
                    onClick={isPlaying ? stopSong : playSong}></div>

                <button className="nes-btn is-warning" id="rules" onClick={() => {
                    setShowRulesModal(true)
                    play2()
                }}>
                    RULES
                </button>

                {
                    showRulesModal && (
                        <div id="rules-modal-wrapper" onClick={() => { setShowRulesModal(false) }}>
                            <div id="rules-modal">
                                <div className="rules-container">
                                    <h2>How to play... <br /><br /></h2>

                                    1. Select challenge mode with the <b><font color="blue">LEVEL</font></b> selector.<br />
                                    <b>"Easy" = 4 donuts, <br />
                                        "Medium" = 5 donuts, <br />
                                        "Hard" = 6 donuts.<br />
                                    </b>
                                    <br /><br />
                                    2. Click each colored donut on the side to create your guess until the row is filled.
                                    <br /> To delete, click red cross <b><font color="red">X</font></b> to clear your guess and re-fill.
                                    <br /><br />
                                    3. Then click the <b><font color="blue">GUESS</font></b> button. You have <b><font color="red">10</font></b> tries.
                                    <br /><br />
                                    4. Each guess may show Bart peg(s) <img className="black-pegs" alt="bart" src={require(`../../assets/img/bart1.png`)} /> and/or Lisa peg(s) <img className="white-pegs" alt="lisat" src={require(`../../assets/img/lisa2.png`)} /> .
                                    <br /><br />
                                    5. <img className="black-pegs" alt="bart" src={require(`../../assets/img/bart1.png`)} /> A Bart peg indicates one of your donuts is the <b><font color="green">CORRECT</font></b> color with the <b><font color="green">CORRECT</font></b> position.
                                    <br />
                                    <img className="white-pegs" alt="lisa" src={require(`../../assets/img/lisa2.png`)} /> A Lisa peg indicates one of your donuts is the <b><font color="green">CORRECT</font></b> color with the <b><font color="red">WRONG</font></b> position.
                                    <br /><br />
                                    6. Use the pegs to guide your next guess. If your guess has donuts with all the right colors and positions within 10 tries, you <b><font color="red">WIN!</font>
                                    </b> <br /><br />
                                    7. Your score is based on the time elapsed. Solving the donut code faster and on a harder challenge mode will result in higher scores.
                                    <br />
                                    Only winners will have the chance to leave their names on the leaderboard.
                                    <br /><br />
                                    9. To begin a new game click the <b><font color="blue">NEW GAME</font></b> button.
                                    <br /><br />

                                    ** You can pause/stop the background music by clicking the control buttons on the top left **
                                </div>
                            </div>
                        </div>
                    )}

                <ChallengeMode
                    // resetWithSizeLimit={resetWithSizeLimit}
                    setSizeLimit={setSizeLimit}
                    reset={reset}
                    play2={play2}
                />

                <div className="arcade-container">

                    <div className="controls">

                        <button id="new-game" className="nes-btn is-primary" type="submit" onClick={() => {
                            if (!isPlaying && isPausing) {
                                pause()
                                // playSong()
                            }

                            play2()
                            // fetchData()
                            reset()
                            setShowResult(false)
                        }
                        }> NEW GAME</button>

                        <button id="guess" className={data[10 - counter]?.length < sizeLimit ? "nes-btn is-disabled" : "nes-btn is-success"} type="submit" disabled={data[10 - counter]?.length < sizeLimit ? true : ""} onClick={() => {

                            //how to add a toggle pop up modal when disable is true to remind user?
                            //if(disabled)

                            if (counter > 0) {
                                numberGuess({ randomCode }.randomCode, { guess }.guess)
                                decrease()
                            }
                            if (counter === 1) {
                                setStartTimer(false)
                                setShowLosingModal(true)
                                setShowResult(true)
                                setPauseTimer(true)
                            }
                            play2()
                            setGuess([])
                        }
                        }> GUESS </button>

                    </div>

                    <div className="monitor-container">
                        <div className="donut-board">
                            {Object.keys(colorMap).map((color) =>

                                <div key={`code-${color}`} onClick={(e) => {
                                    if (!isPlaying && !isPausing && !isStopping) playSong()
                                    addToGuess(color)
                                    play3()

                                }}>
                                    <img className="donut-image" alt="donuts" src={require(`../../assets/img/${colorMap[color]}.png`)} />
                                </div>
                                // each child in a list should have a unique key prop id={color}
                                //require used for static imports .
                                //{colorMap[color]}
                            )}
                        </div>

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
                                    isBlue={10 - counter === idx ? "blue" : ""}
                                    isGrey={10 - counter > idx ? " grey" : ""}
                                    isRed={10 - counter === idx ? "red" : ""}
                                    setGuess={setGuess}
                                />
                            )}
                        </div>
                    </div>

                    {
                        showWinningModal &&
                        <div id="modal-wrapper" onClick={() => {
                            // setShowModal(false)
                            setShowWinningModal(false)
                            // fetchData()
                            reset()
                        }}>
                            <div id="modal" >

                                <div style={{ display: showResult ? "block" : "none" }}>
                                    <div className="results-container">
                                        {randomCode.map((number, idx) =>
                                            <div key={`code-${idx}`}>
                                                <img alt="answer" src={require(`../../assets/img/${number}.png`)}></img>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                <audio src={wooHoo} autoPlay></audio>
                                <div className="results-modal-text">WOO HOO <br></br> YOU WON !!</div>
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

                                <div className="results" style={{ display: showResult ? "block" : "none" }}>

                                    <div className="results-container">
                                        {randomCode.map((number, idx) =>
                                            <div key={`code-${idx}`}>
                                                <img alt="answer" src={require(`../../assets/img/${number}.png`)}></img>
                                            </div>
                                        )}

                                    </div>
                                </div>



                                <audio src={doh} autoPlay></audio>
                                <div className="results-modal-text">D' OH !! <br></br> YOU LOST </div>
                                <img src={losingLogo} className="logo" alt="logo" />
                            </div>
                        </div>
                    }

                </div>


            </div>
        </>
    )
}

export default Game;
