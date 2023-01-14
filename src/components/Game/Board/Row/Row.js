import React, { useEffect, useState, useRef } from 'react'



function Row({ passDataToRow, numberMap, rowIdx, passAnswerToRow, showAnswer, sizeLimit }) {


    const pegDivs = [];

    if (passAnswerToRow[rowIdx]) {
        for (let i = 0; i < passAnswerToRow[rowIdx][0]; i++) {
            pegDivs.push(<div className="black-peg black-circle" key={`blacks-${i}`} >
                <circle><img src={require(`./../../bart.png`)} /></circle>
            </div>)
        }
        for (let i = 0; i < passAnswerToRow[rowIdx][1]; i++) {
            pegDivs.push(<div className="white-peg white-circle" key={`whites-${i}`}>
                <circle><img src={require(`./../../lisa.png`)} /></circle>
            </div>)
        }

    }


    return (

        <>

            <div className="row">
                {[...Array(sizeLimit)].map((x, idx) =>
                    <div className="row-tile" key={`row-${rowIdx}-${idx}`}>
                        {idx in passDataToRow[rowIdx] ? <img src={require(`./../../${passDataToRow[rowIdx][idx]}.png`)} /> : ""}
                    </div>)}
                <div className="pegs">
                    {pegDivs}
                </div>
            </div>



        </>

    )
}

export default Row;
