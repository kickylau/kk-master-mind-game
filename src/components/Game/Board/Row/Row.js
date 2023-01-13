import React, { useEffect, useState, useRef } from 'react'



function Row({ passDataToRow, numberMap, rowIdx, passAnswerToRow, showAnswer }) {


    const pegDivs = [];

    if (passAnswerToRow[rowIdx]) {
        for (let i = 0; i < passAnswerToRow[rowIdx][0]; i++) {
            pegDivs.push(<div className="blackPeg" key={`blacks-${i}`} />)
        }
        for (let i = 0; i < passAnswerToRow[rowIdx][1]; i++) {
            pegDivs.push(<div className="whitePeg" key={`whites-${i}`} />)
        }

    }


    return (

        <>

            <div className="row">
                {[...Array(4)].map((x, idx) =>
                    <div className="row-tile" id={passDataToRow[rowIdx] ? numberMap[passDataToRow[rowIdx][idx]] : ""}>
                    </div>)}
                <div className="pegs" >

                    {pegDivs}
                </div>
            </div>



        </>

    )
}

export default Row;
