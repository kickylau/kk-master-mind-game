import React from "react";

function Rules({ setShowRulesModal, showRulesModal, playClick }) {
  return (
    <>
      <button
        className="nes-btn is-warning"
        id="rules"
        onClick={() => {
          setShowRulesModal(true);
          playClick();
        }}
      >
        RULES
      </button>
      {showRulesModal && (
        <div
          id="rules-modal-wrapper"
          onClick={() => {
            setShowRulesModal(false);
          }}
        >
          <div id="rules-modal">
            <div className="rules-container">
              <h2>
                How To Play
              </h2>
              <br />
              ** The goal of this game is to guess all donuts in the<b><font color="green"> CORRECT ORDER </font></b>with the<b><font color="green"> CORRECT COLOR </font></b>within<b><font color="red"> 10 </font></b>tries **
              <br />
              <br />
              1. Select challenge mode with the<b><font color="blue"> LEVEL </font></b>selector.
              <br />
              <b>
                "Easy" = 4 donuts, <br />
                "Medium" = 5 donuts, <br />
                "Hard" = 6 donuts.
              </b>
              <br />
              <br />
              2. Click and choose a donut from the left hand panel to create your guess until the row is filled.
              <br />
              Once the row is complete, click the <b><font color="blue"> GUESS </font></b> button.
              <br />
              To delete, click red cross <b><font color="red"> X </font></b> to clear your guess and re-fill.
              <br />
              <br />
              4. Each guess may show Bart peg(s) <img
                alt="bart"
                style={{ width: "1vw", height: "2vh" }}
                src={require(`../../../assets/img/bart.png`)}
              /> and/or Lisa peg(s) <img
                style={{ width: "1vw", height: "2vh" }}
                alt="lisat"
                src={require(`../../../assets/img/lisa.png`)}
              />.
              <br />
              <br />
              5. <img
                alt="bart"
                style={{ width: "1vw", height: "2vh" }}
                src={require(`../../../assets/img/bart.png`)}
              /> A Bart peg indicates one of your donuts is the <b><font color="green"> CORRECT </font></b> color with the <b><font color="green"> CORRECT </font></b> position.
              <br />
              <img
                style={{ width: "1vw", height: "2vh" }}
                alt="lisa"
                src={require(`../../../assets/img/lisa.png`)}
              /> A Lisa peg indicates one of your donuts is the <b><font color="green"> CORRECT </font></b> color with the <b><font color="red"> WRONG </font></b> position.
              <br />
              <br />
              6. Use the pegs to guide your next guess. Multiple Bart and/or Lisa peg(s) indicate you are getting closer!
              <br />
              <br />
              7. To start a new game click the <b><font color="blue"> NEW GAME </font></b> button.
              <br />
              <br />
              8. The timer on the top right keeps track of how long you take to solve each game.
              <br />
              <br />
              ** You can pause/stop the background music by clicking the control buttons on the top left **
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Rules;
