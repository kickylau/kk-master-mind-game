import React, { useEffect, useState, useRef } from 'react'



function Row({ passDataToRow, numberMap, rowIdx }) {

    //const [showRow,setShowRow] = useState(false)


    //     function showRow(){
    //         //let row = [];
    //         if({guess})
    //     }

    //if (newGuess) setShowRow(true)


    return (

        <>

            <div className="row">
                {/*
                <div className="board"> */}

                {passDataToRow[rowIdx]?.map((number, idx) =>
                    <div key={`row-${idx}`} className="row-tile" id={numberMap[number]}>
                    </div>)}

                {/* </div> */}

                <div className="pegs">
                    <div className="peg-rows"></div>
                </div>
            </div>


        </>

    )
}

export default Row;
