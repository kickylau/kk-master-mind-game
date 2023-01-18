import React from "react";

function Music({ isPlaying, pauseSong, playSong, stopSong }) {
  return (
    <>
      <div
        className="fa-solid fa-circle-pause"
        onClick={isPlaying ? pauseSong : playSong}
      ></div>

      <div
        className="fa-solid fa-circle-stop"
        onClick={isPlaying ? stopSong : playSong}
      ></div>
    </>
  );
}

export default Music;
