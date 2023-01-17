import React, { useState } from 'react'

 function ChallengeMode({setSizeLimit,reset,play2}) {
//function ChallengeMode({ resetWithSizeLimit }) {

    return (
        <>
            <div className="challenge-mode">
                <div className="nes-select is-error">
                    <select defaultValue={"DEFAULT"} required id="error_select"
                        onChange={e => {
                            setSizeLimit(parseInt(e.target.value))
                            reset()
                            play2()
                            //resetWithSizeLimit(parseInt(e.target.value))
                        }}
                    >
                        <option value="DEFAULT" disabled hidden>LEVEL</option>
                        <option value="4">EASY</option>
                        <option value="5">MEDIUM</option>
                        <option value="6">HARD</option>
                    </select>
                </div>
            </div>
        </>
    )
}

export default ChallengeMode;
