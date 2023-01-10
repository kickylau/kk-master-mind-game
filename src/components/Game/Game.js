import "./Game.css"
import React, { useEffect, useState, useRef } from 'react'
import logo from '../SplashPage/homer.png';
//import { useDispatch } from 'react-redux';
//import { Modal } from "../../Modal";
//import Modal from "react-native-modal";




function Game() {

    const sizeLimit = 4

    const [randomCode, setRandomCode] = useState([]);
    const [answer, setAnswer] = useState("")
    const [guess, setGuess] = useState()
    const [counter, setCounter] = useState(10)
    const isMounted = useRef(false);
    const [showModal, setShowModal] = useState(false);

    //const handleModal = () => setShowModal(() => !showModal);

    // //increase counter
    // const increase = () => {
    //     setCounter(counter => counter + 1)
    // }

    //decrease counter
    const decrease = () => {
        setCounter(counter => counter - 1)
    }

    //reset counter
    const reset = () => {
        setCounter(10)
    }

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


    function addToGuess(color) {
        //console.log("curr guess initially", { guess })
        //console.log("choosing ", color)
        let num = colorMap[color]
        let newGuess = { guess }.guess.concat(num)
        if (newGuess.length > sizeLimit) newGuess.splice(0, 1)
        //console.log(newGuess)
        setGuess(newGuess)
        //setCounter(counter)
    }

    function numberGuess(code, guess) {
        //console.log("code:", code, "guess:", guess)
        //console.log(answer[randomCode])
        // console.log(answer.randomCode)
        let correctPosAndColor = 0;
        let correctColorWrongPos = 0;
        let map = {};
        for (let num of code) {
            if (map[num] != null) map[num]++
            else map[num] = 1
        }
        //console.log(map)
        for (let i = 0; i < guess.length; i++) {
            if (guess[i] == code[i]) {
                correctPosAndColor++
                map[guess[i]]--
            } else if (map[guess[i]] && guess[i] !== code[i]) {
                correctColorWrongPos++
                map[guess[i]]--
                //console.log(guess[i])
                //console.log(map)
            }

        }
        let res = "You have " + correctPosAndColor + "blacks and " + correctColorWrongPos + "whites."
        setAnswer(res)
        return res
    }



    const fetchData = async () => {
        const url = 'https://www.random.org/integers/?num=4&min=1&max=6&col=1&base=10&format=plain&rnd=new'

        try {
            const response = await fetch(url);
            const data = await response.text()
            //randomCode = data.split("\n")
            // console.log(randomCode)
            // console.log(answer)
            setRandomCode(data.split("\n").filter(e => e.length > 0))  //to only extract the 4 random number without empty string at the end of the array
            //console.log("i fire here")
        } catch (error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        if (isMounted.current) return;
        isMounted.current = true;
        fetchData();
        //console.log("i fire once ")
        //return ()=> setRandomCode().abort()
    }, [])


    useEffect(() => {
        setAnswer()
    }, [])

    useEffect(() => {
        //console.log(setGuess())
        setGuess([])
    }, [])


    return (
        <>
            <div className="Game">
                <h1>Master Mind Game</h1>
                <h1>Result = {randomCode}</h1>
                <h1>Your Answer:{answer}  </h1>
                <h1>Your Counts Left: {counter}</h1>
                <h1>You Are Guessing: {guess}</h1>
                <div className="fullBoard">
                    <div className="board"></div>
                    <div className="pegs"></div>
                </div>
                <div className="other">
                    <div className="code">
                        <div className="secretColor"></div>
                        <div className="secretColor"></div>
                        <div className="secretColor"></div>
                        <div className="secretColor"></div>
                    </div>
                </div>
                <div className="colorBoard">
                    {Object.keys(colorMap).map((color) =>
                        <div key={color} className="color" id={color} onClick={e => addToGuess(e.target.id)}>{colorMap[color]}</div>
                        // each child in a list should have a unique key prop
                    )}
                </div>
                <div>
                    <button className="newGame" type="submit" onClick={() => {
                        fetchData()
                        reset()
                    }
                    }> New Game</button>
                </div>
                <div><button className="check" type="submit" onClick={() => {
                    if (counter > 0) {
                        numberGuess({ randomCode }.randomCode, { guess }.guess)
                        decrease()
                        console.log(counter)
                    }
                    if (counter == 1) setShowModal(true)
                }
                }> Check </button></div>

                {
                    showModal &&
                    <div id="modalWrapper" onClick={() => { setShowModal(false) }}>
                        <div id="modal" >
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </div>
                }
            </div>

        </>
    )
}

export default Game;
