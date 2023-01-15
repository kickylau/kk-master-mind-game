import React, { useEffect, useState, useRef } from 'react'



function Row({ passDataToRow, numberMap, rowIdx, passAnswerToRow, showAnswer, sizeLimit, isBlue, isGrey }) {


    const pegDivs = [];

    if (passAnswerToRow[rowIdx]) {
        for (let i = 0; i < passAnswerToRow[rowIdx][0]; i++) {
            pegDivs.push(<div className="black-pegs" key={`blacks-${i}`} >
                <img src={require(`./../../bart1.png`)} />
            </div>)
        }
        for (let i = 0; i < passAnswerToRow[rowIdx][1]; i++) {
            pegDivs.push(<div className="white-pegs" key={`whites-${i}`}>
                <img src={require(`./../../lisa2.png`)} />
            </div>)
        }

    }


    return (

        <>

            <div className="row">
                {/* <i className="fa-solid fa-angles-right"></i> */}
                <i className={`fa-solid fa-angles-right ${isBlue} ${isGrey}`}></i>
                {[...Array(sizeLimit)].map((x, idx) =>
                    <div className="row-tile" key={`row-${rowIdx}-${idx}`}>
                        {idx in passDataToRow[rowIdx] ? <img className="donut-image" src={require(`./../../${passDataToRow[rowIdx][idx]}.png`)} /> : ""}
                    </div>)}
                <div className="pegs">
                    {pegDivs}
                </div>
            </div>



        </>

    )
}

export default Row;
