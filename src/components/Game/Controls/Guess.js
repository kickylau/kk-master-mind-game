import React from "react";

function Guess({
  data,
  counter,
  sizeLimit,
  playClick,
  randomCode,
  guess,
  setGuess,
  numberGuess,
  decrease,
}) {
  return (
    <>
      <button
        id="guess"
        className={
          data[10 - counter]?.length < sizeLimit
            ? "nes-btn is-disabled"
            : "nes-btn is-success"
        }
        type="submit"
        disabled={data[10 - counter]?.length < sizeLimit ? true : ""}
        onClick={() => {
          if (counter > 0) {
            numberGuess({ randomCode }.randomCode, { guess }.guess);
            decrease();
          }
          playClick();
          setGuess([]);
        }}
      >
        GUESS
      </button>
    </>
  );
}

export default Guess;
