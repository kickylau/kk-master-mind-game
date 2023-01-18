import React from "react";

function NewGame({
  isPlaying,
  isPausing,
  pause,
  playClick,
  fetchData,
  reset,
  setShowResult,
}) {
  return (
    <>
      <button
        id="new-game"
        className="nes-btn is-primary"
        type="submit"
        onClick={() => {
          if (!isPlaying && isPausing) {
            pause();
          }

          playClick();
          fetchData();
          reset();
          setShowResult(false);
        }}
      >
        NEW GAME
      </button>
    </>
  );
}

export default NewGame;
