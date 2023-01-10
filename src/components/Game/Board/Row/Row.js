import React, { useEffect, useState, useRef } from 'react'



function Row({ passDataToRow, numberMap, rowIdx, passAnswerToRow, showAnswer, pegWhite, pegBlack }) {
    console.log("child", showAnswer)

    console.log(pegWhite)
    console.log(pegBlack)

    //const [showAnswer,setShowAnswer] = useState(false)


    //     function showRow(){
    //         //let row = [];
    //         if({guess})
    //     }

    //if (newGuess) setShowRow(true)


    return (

        <>

            <div className="row">
                {passDataToRow[rowIdx]?.map((number, idx) =>
                    <div key={`row-${idx}`} className="row-tile" id={numberMap[number]}>
                    </div>)}
                <div className="pegs" >
                    
                    <div  className="peg-rows" style={{ display: showAnswer ? "block" : "none" }}>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Row;
