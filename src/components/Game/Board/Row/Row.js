import React, { useEffect, useState, useRef } from 'react'



function Row({ passDataToRow, numberMap, rowIdx, passAnswerToRow, showAnswer }) {
    // console.log("child", showAnswer)

    // console.log(pegWhite)
    // console.log(pegBlack)

    //console.log(passAnswerToRow)
    // console.log("row",rowIdx)
    //console.log("peg result",passAnswerToRow[rowIdx])
    // console.log("data", passDataToRow[rowIdx], [rowIdx])
    //const [showAnswer,setShowAnswer] = useState(false)


    //     function showRow(){
    //         //let row = [];
    //         if({guess})
    //     }


    //    const rows = [];
    // for (let i = 0; i < numrows; i++) {
    //     // note: we are adding a key prop here to allow react to uniquely identify each
    //     // element in this array. see: https://reactjs.org/docs/lists-and-keys.html
    //     rows.push(<ObjectRow key={i} />);
    // }
    // return <tbody>{rows}</tbody>;

    const pegDivs = [];
    // function pegDiv() {

    if (passAnswerToRow[rowIdx]) {
        //console.log("PEG ROW DETECTED!")
        for (let i = 0; i < passAnswerToRow[rowIdx][0]; i++) {
            //console.log("ADD BLACK PEG!")
            pegDivs.push(<div className="blackPeg" key={`blacks-${i}`} />)
        }
        for (let i = 0; i < passAnswerToRow[rowIdx][1]; i++) {
            //console.log("ADD BLACK PEG!")
            pegDivs.push(<div className="whitePeg" s key={`whites-${i}`} />)
        }

    }
    //console.log(pegDivs)
    // }

    return (

        <>

            <div className="row">
                {passDataToRow[rowIdx]?.map((number, idx) =>
                    <div key={`row-${idx}`} className="row-tile" id={numberMap[number]}>
                    </div>)}
                <div className="pegs" >
                    {pegDivs}
                </div>
            </div>



        </>

    )
}

export default Row;
