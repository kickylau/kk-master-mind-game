import "./Game.css"
import React, { useEffect, useState, useRef } from 'react'
import logo from '../SplashPage/homer.png';
import Row from "./Board/Row/Row.js"
import background from "./background.png";



function Game() {

    const sizeLimit = 4

    const [randomCode, setRandomCode] = useState([]);
    const [answer, setAnswer] = useState("")
    const [guess, setGuess] = useState()
    const [counter, setCounter] = useState(10)
    const isMounted = useRef(false);
    const [showModal, setShowModal] = useState(false);
    const [showWinningModal, setShowWinningModal] = useState(false);
    const [showResult, setShowResult] = useState(false);
    const [showAnswer, setShowAnswer] = useState(false)
    const [pegWhite, setPegWhite] = useState(0)
    const [pegBlack, setPegBlack] = useState(0)




    //create a function and a button to trigger so that pass data to child
    //create a state to manage the data

    const [data, setData] = useState(new Array(10).fill([]))
    const [pegData, setPegData] = useState(new Array(10).fill([]))

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
        "red": 1,
        "purple": 2,
        "yellow": 3,
        "green": 4,
        "pink": 5,
        "gold": 6,
        "orange": 7
    }

    const numberMap = {
        0: "blue",
        1: "red",
        2: "purple",
        3: "yellow",
        4: "green",
        5: "pink",
        6: "gold",
        7: "orange"
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

        if (correctPosAndColor == 4) {
            setShowWinningModal(true)
            setShowResult(true)
        }
        return res
    }


    //fetch random number API
    const fetchData = async () => {
        const url = 'https://www.random.org/integers/?num=4&min=1&max=6&col=1&base=10&format=plain&rnd=new'

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

    // console.log("parent", showAnswer)


    return (
        <>

            <div className="container">
                <div className="arcade-container">


                    <div className="body">


                        <h1>Master Mind Game</h1>
                        <h1>Result = {randomCode}</h1>
                        <h1>Your Answer:{answer}  </h1>
                        <h1>Your Counts Left: {counter}</h1>
                        <h1>You Are Guessing: {guess}</h1>



                        <div className="game-container">
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
                                    />
                                )}
                            </div>
                            <div className="donut-board">
                                {Object.keys(colorMap).map((color) =>
                                    <div key={`code-${color}`} className="donut-board-tile" id={color} onClick={e =>
                                        addToGuess(e.target.id)

                                    }>{colorMap[color]}</div>
                                    // each child in a list should have a unique key prop
                                )}
                            </div>
                        </div>

                        <div className="krusty-header"></div>

                        <div className="other" style={{ display: showResult ? "block" : "none" }}>
                            <div className="code">
                                {randomCode.map((number, idx) =>
                                    <div key={`code-${idx}`} className="secretColor" id={numberMap[number]}></div>
                                )}
                            </div>
                        </div>


                        <div>
                            <button className="newGame" type="submit" onClick={() => {
                                fetchData()
                                reset()
                                setShowResult(false)
                            }
                            }> New Game</button>
                        </div>


                        <div><button className="check" type="submit" onClick={() => {

                            // disabled={data[10 - counter].length < 4 ? "true" : ""}
                            if (counter > 0) {
                                numberGuess({ randomCode }.randomCode, { guess }.guess)
                                decrease()
                            }
                            if (counter == 1) {
                                setShowModal(true)
                                setShowResult(true)
                            }
                            setGuess([])
                        }
                        }> Check </button>
                        </div>

                        {
                            showWinningModal &&
                            <div id="modalWrapper" onClick={() => {
                                setShowModal(false)
                                setShowWinningModal(false)
                                fetchData()
                                reset()
                            }}>
                                <div id="modal" >
                                    <img src={logo} className="App-logo" alt="logo" />
                                </div>
                            </div>
                        }

                        {
                            showModal &&
                            <div id="modalWrapper" onClick={() => {
                                setShowModal(false)
                                fetchData()
                                reset()
                            }}>
                                <div id="modal" >
                                    <img src={logo} className="App-logo" alt="logo" />
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
