import React from "react";

function DonutBoard({
  colorMap,
  isPlaying,
  isPausing,
  isStopping,
  playSong,
  addToGuess,
  playDonutClick,
}) {
  return (
    <>
      {Object.keys(colorMap).map((color) => (
        <div
          key={`code-${color}`}
          onClick={(e) => {
            if (!isPlaying && !isPausing && !isStopping) playSong();
            addToGuess(color);
            playDonutClick();
          }}
        >
          <img
            className="donut-image"
            alt="donuts"
            src={require(`../../../assets/img/${colorMap[color]}.png`)}
          />
        </div>
      ))}
    </>
  );
}

export default DonutBoard;
