import React from "react";
import winningLogo from "../../../assets/img/wooHoo.png";
import losingLogo from "../../../assets/img/doh.png";
import doh from "../../../assets/audioAndVideo/doh.mp3";
import wooHoo from "../../../assets/audioAndVideo/wooHoo.mp3";

function ResultModal({
  showWinningModal,
  setShowWinningModal,
  showLosingModal,
  setShowLosingModal,
  fetchData,
  reset,
  showResult,
  randomCode,
}) {
  return (
    <>
      {showWinningModal && (
        <div
          id="modal-wrapper"
          onClick={() => {
            setShowWinningModal(false);
            fetchData();
            reset();
          }}
        >
          <div id="modal">
            <div style={{ display: showResult ? "block" : "none" }}>
              <div className="results-container">
                {randomCode.map((number, idx) => (
                  <div key={`code-${idx}`}>
                    <img
                      alt="answer"
                      src={require(`../../../assets/img/${number}.png`)}
                    ></img>
                  </div>
                ))}
              </div>
            </div>

            <audio src={wooHoo} autoPlay></audio>
            <div className="results-modal-text">
              WOO HOO <br></br> YOU WON !!
            </div>
            <img src={winningLogo} className="logo" alt="logo" />
          </div>
        </div>
      )}

      {showLosingModal && (
        <div
          id="modal-wrapper"
          onClick={() => {
            setShowLosingModal(false);
            fetchData();
            reset();
          }}
        >
          <div id="modal">
            <div
              className="results"
              style={{ display: showResult ? "block" : "none" }}
            >
              <div className="results-container">
                {randomCode.map((number, idx) => (
                  <div key={`code-${idx}`}>
                    <img
                      alt="answer"
                      src={require(`../../../assets/img/${number}.png`)}
                    ></img>
                  </div>
                ))}
              </div>
            </div>

            <audio src={doh} autoPlay></audio>
            <div className="results-modal-text">
              D' OH !! <br></br> GAME OVER
            </div>
            <img src={losingLogo} className="logo" alt="logo" />
          </div>
        </div>
      )}
    </>
  );
}

export default ResultModal;
