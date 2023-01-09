import "./Game.css"
import React, { useEffect, useState, useRef } from 'react'
import logo from '../SplashPage/homer.png';
//import { useDispatch } from 'react-redux';



function Game() {

    const sizeLimit = 4

    const [randomCode, setRandomCode] = useState([]);
    const [answer, setAnswer] = useState("")
    const [guess, setGuess] = useState()
    const [counter, setCounter] = useState(10)
    const isMounted = useRef(false);
    const [showModal, setShowModal] = useState(false);

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
                    if (counter == 0) setShowModal(false)
                }
                }> Check </button></div>
                {showModal &&
                    <div id="modalWrapper" onClick={e =>
                        console.log(e)
                        // console.log("CLICKED!")
                        // setShowModal(false)
                    }>
                        <div id="modal">
                            <img src={logo} className="App-logo" alt="logo" />
                        </div>
                    </div>
                }

            </div>
        </>
    )
}
export default Game



// $(document).ready(function () {
//     var currentColor = "white";
//     var currentBoardCells = ["board40", "board41", "board42", "board43"];
//     var currentPegCells = ["peg40", "peg41", "peg42", "peg43"]
//     var currentRow = 11;
//     var possibleColors = ["blue", "green", "red", "yellow", "orange", "pink"];
//     var hasWon = false;

//     var cell1Color, cell2Color, cell3Color, cell4Color;

//     //dictionary of colors
//     var colors = {
//         "rgb(0, 128, 0)": "green",
//         "rgb(255, 255, 0)": "yellow",
//         "rgb(255, 0, 0)": "red",
//         "rgb(0, 0, 255)": "blue",
//         "rgb(255, 192, 203)": "pink",
//         "rgb(255, 165, 0)": "orange"
//     }

//     //create the random color code
//     var code = [
//         possibleColors[Math.floor(Math.random() * 6)],
//         possibleColors[Math.floor(Math.random() * 6)],
//         possibleColors[Math.floor(Math.random() * 6)],
//         possibleColors[Math.floor(Math.random() * 6)]
//     ];

//     console.log(code);

//     //create the cells and add them to the board
//     for (let i = 0; i < 44; i++) {
//         let cell = "<div class=\"boardCell\" id=board" + i + "></div>"
//         $(".board").append(cell);
//     }

//     //create cells for the pegs
//     for (let i = 0; i < 44; i++) {
//         let cell = "<div class=\"pegCell\" id=peg" + i + "></div>"
//         $(".pegs").append(cell);
//     }

//     //change the style of the board so you can view the rows
//     $(".board").css("grid-template-rows", "repeat(11,73.18px)");
//     $(".board").css("grid-template-columns", "repeat(4,73.18px)");
//     $(".boardCell").css("border", "1px solid black");
//     $(".boardCell").css("border-radius", "50%");
//     $(".boardCell").css("background-color", "white");

//     //change the style of the pegs
//     $(".pegs").css("grid-template-rows", "repeat(22,36.59px)");
//     $(".pegs").css("grid-template-columns", "repeat(2,36.59px");
//     $(".pegCell").css("border", "1px solid black");
//     $(".pegCell").css("border-radius", "50%")
//     $(".pegCell").css("background-color", "gray")

//     //add colors to the color board
//     $(".color").each(function () {
//         //set the color of the cell to its ID
//         let color = $(this).attr("id");
//         $(this).css("background-color", color);
//     });

//     //change the current color when the user clicks on the color board
//     $(".color").click(function () {
//         let color = $(this).attr("id");
//         currentColor = color;
//         $(".currentColor").css("background-color", color);
//     });

//     //change the color of a board cell on click
//     $(".boardCell").click(function () {
//         var id = $(this).attr("id");

//         if (isValid(id)) {
//             $(this).css("background-color", currentColor);
//         }
//     });

//     //do actions when the submit button is clicked
//     $(".submit").click(function () {
//         updatePegs();
//         checkWin();
//         changeCurrentRow();
//     });

//     //change the valid board cells to click on
//     function changeCurrentRow() {
//         currentRow -= 1;
//         var mult = 4;

//         currentBoardCells = [
//             "board" + (currentRow * mult - 4),
//             "board" + (currentRow * mult - 3),
//             "board" + (currentRow * mult - 2),
//             "board" + (currentRow * mult - 1)];
//         currentPegCells = [
//             "peg" + (currentRow * mult - 4),
//             "peg" + (currentRow * mult - 3),
//             "peg" + (currentRow * mult - 2),
//             "peg" + (currentRow * mult - 1)];
//     }

//     //check whether the cell clicked on is valid
//     function isValid(id) {
//         if (currentBoardCells.includes(id) && hasWon === false) {
//             return true;
//         }
//         return false;
//     }

//     //check if the player has won
//     function checkWin() {
//         if (code[0] === cell1Color &&
//             code[1] === cell2Color &&
//             code[2] === cell3Color &&
//             code[3] === cell4Color) {
//             hasWon = true;
//             alert("Congratulations, you have won!\nThe code will now be displayed.");
//             //set the colors of the code box
//             $("#secretColor1").css("background-color", code[0]);
//             $("#secretColor2").css("background-color", code[1]);
//             $("#secretColor3").css("background-color", code[2]);
//             $("#secretColor4").css("background-color", code[3]);
//         }

//         return hasWon;
//     }

//     //change the pegs depending on the cell colors
//     function updatePegs() {
//         let cell1 = $("#" + currentBoardCells[0]);
//         let cell2 = $("#" + currentBoardCells[1]);
//         let cell3 = $("#" + currentBoardCells[2]);
//         let cell4 = $("#" + currentBoardCells[3]);

//         cell1Color = colors[cell1.css("background-color")];
//         cell2Color = colors[cell2.css("background-color")];
//         cell3Color = colors[cell3.css("background-color")];
//         cell4Color = colors[cell4.css("background-color")];

//         let peg1 = $("#" + currentPegCells[0]);
//         let peg2 = $("#" + currentPegCells[1]);
//         let peg3 = $("#" + currentPegCells[2]);
//         let peg4 = $("#" + currentPegCells[3]);

//         let pegs = [peg1, peg2, peg3, peg4];

//         //array of pegs that have been filled
//         let filledPegs = [];
//         //array of cells that have already been accounted for
//         let chosenCells = [];
//         //create copy of the code array
//         let codeCopy = [...code];

//         //if the colors are in the correct positions,
//         //  change the pegs to red
//         if (code[0] === cell1Color) {
//             //choose a random peg that has not yet been filled
//             let num = randomNum14(filledPegs);
//             filledPegs.push(num);

//             //remove the color from codeCopy because it has
//             //  already been accounted for
//             let index = codeCopy.indexOf(cell1Color);
//             if (index > -1) {
//                 codeCopy.splice(index, 1);
//             }

//             //add number to choseCells to state that this cell
//             //  has now been accounted for
//             chosenCells.push(1);

//             //fill the according peg
//             pegs[num - 1].css("background-color", "red");
//         }
//         if (code[1] === cell2Color) {
//             let num = randomNum14(filledPegs);
//             filledPegs.push(num);

//             //remove the color from codeCopy because it has
//             //  already been accounted for
//             let index = codeCopy.indexOf(cell2Color);
//             if (index > -1) {
//                 codeCopy.splice(index, 1);
//             }

//             chosenCells.push(2);

//             pegs[num - 1].css("background-color", "red");
//         }
//         if (code[2] === cell3Color) {
//             let num = randomNum14(filledPegs);
//             filledPegs.push(num);

//             //remove the color from codeCopy because it has
//             //  already been accounted for
//             let index = codeCopy.indexOf(cell3Color);
//             if (index > -1) {
//                 codeCopy.splice(index, 1);
//             }

//             chosenCells.push(3);

//             pegs[num - 1].css("background-color", "red");
//         }
//         if (code[3] === cell4Color) {
//             let num = randomNum14(filledPegs);
//             filledPegs.push(num);

//             //remove the color from codeCopy because it has
//             //  already been accounted for
//             let index = codeCopy.indexOf(cell4Color);
//             if (index > -1) {
//                 codeCopy.splice(index, 1);
//             }

//             chosenCells.push(4);

//             pegs[num - 1].css("background-color", "red");
//         }


//         //if the code copy includes the colors of the four cells
//         //  then change the pegs to white because the code copy
//         //  now only includes colors that have not been accounted
//         //  for

//         if (codeCopy.includes(cell1Color) && !chosenCells.includes(1)) {
//             //choose a random peg that has not yet been filled
//             let num = randomNum14(filledPegs);
//             filledPegs.push(num);

//             //fill the according peg
//             pegs[num - 1].css("background-color", "white");
//         }
//         if (codeCopy.includes(cell2Color) && !chosenCells.includes(2)) {
//             //choose a random peg that has not yet been filled
//             let num = randomNum14(filledPegs);
//             filledPegs.push(num);

//             //fill the according peg
//             pegs[num - 1].css("background-color", "white");
//         }
//         if (codeCopy.includes(cell3Color) && !chosenCells.includes(3)) {
//             //choose a random peg that has not yet been filled
//             let num = randomNum14(filledPegs);
//             filledPegs.push(num);

//             //fill the according peg
//             pegs[num - 1].css("background-color", "white");
//         }
//         if (codeCopy.includes(cell4Color) && !chosenCells.includes(4)) {
//             //choose a random peg that has not yet been filled
//             let num = randomNum14(filledPegs);
//             filledPegs.push(num);

//             //fill the according peg
//             pegs[num - 1].css("background-color", "white");
//         }
//     }

//     //choose a random number from 1-4 that is not in the given array
//     function randomNum14(nums) {
//         //generate a number from 1-4
//         let num = Math.floor(Math.random() * 4) + 1;
//         //while that number has already been chosen
//         //  choose another one
//         while (nums.includes(num)) {
//             num = Math.floor(Math.random() * 4) + 1;
//         }
//         return num;
//     }
// });
