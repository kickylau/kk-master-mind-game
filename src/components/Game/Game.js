import React, { useEffect, useState, useRef } from "react";
import useSound from "use-sound";
import "./Game.css";
import "nes.css/css/nes.min.css";
import backgroundMusic from "../../assets/audioAndVideo/backgroundMusic.mp3";
import backgroundVideo from "../../assets/audioAndVideo/backgroundVideo.mp4";
import click from "../../assets/audioAndVideo/click.mp3";
import donutClick from "../../assets/audioAndVideo/donutClick.mp3";
import Timer from "./Timer/Timer";
import ChallengeMode from "./ChallengeMode/ChallengeMode";
import Rules from "./Rules/Rules";
import DonutBoard from "./Board/DonutBoard";
import NewGame from "./Controls/NewGame";
import Guess from "./Controls/Guess";
import Row from "./Board/Row";
import ResultModal from "./ResultModal/ResultModal";
import Music from "./Music/Music";

function Game() {
  const [randomCode, setRandomCode] = useState([]);
  const [guess, setGuess] = useState([]);
  const [counter, setCounter] = useState(10);
  const isMounted = useRef(false);
  const [showLosingModal, setShowLosingModal] = useState(false);
  const [showWinningModal, setShowWinningModal] = useState(false);
  const [showRulesModal, setShowRulesModal] = useState(false);
  const [showResult, setShowResult] = useState(false);
  const [play, { stop, pause }] = useSound(backgroundMusic);
  const [playClick] = useSound(click);
  const [playDonutClick] = useSound(donutClick);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isPausing, setIsPausing] = useState(false);
  const [isStopping, setIsStopping] = useState(false);
  const [sizeLimit, setSizeLimit] = useState(4);
  const [startTimer, setStartTimer] = useState(false);
  const [pauseTimer, setPauseTimer] = useState(false);
  const [data, setData] = useState(new Array(10).fill([]));
  const [pegData, setPegData] = useState(new Array(10).fill([]));

  //fetch random number API
  const fetchData = async () => {
    const url = `https://www.random.org/integers/?num=${sizeLimit}&min=0&max=7&col=1&base=10&format=plain&rnd=new`;

    try {
      const response = await fetch(url);
      const data = await response.text();
      setRandomCode(
        data
          .split("\n")
          .filter((e) => e.length > 0)
          .map((e) => parseInt(e))
      );
      //to only extract the 4 random number without empty string at the end of the array
    } catch (error) {
      console.log("error", error);
    }
  };

  //create map color vs. number
  const colorMap = {
    blue: 0,
    red: 1,
    purple: 2,
    yellow: 3,
    green: 4,
    pink: 5,
    caremel: 6,
    brown: 7,
  };

  //enter current guess
  const addToGuess = (color) => {
    setStartTimer(true);
    let newGuess;
    if (counter > 0) {
      let num = colorMap[color];
      newGuess = { guess }.guess.concat(num);
      if (newGuess.length <= sizeLimit) {
        setGuess(newGuess);
      }
    }
    passDataToRow(newGuess);
    return newGuess;
  };

  //match the current guess vs. actual result
  const numberGuess = (code, guess) => {
    let correctPosAndColor = 0;
    let correctColorWrongPos = 0;
    let map = {};
    for (let num of code) {
      if (map[num] != null) map[num]++;
      else map[num] = 1;
    }

    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === code[i]) {
        correctPosAndColor++;
      }
      if (guess[i] in map && map[guess[i]] > 0) {
        correctColorWrongPos++;
        map[guess[i]]--;
      }
    }
    correctColorWrongPos = correctColorWrongPos - correctPosAndColor;
    passAnswerToRow([correctPosAndColor, correctColorWrongPos]);

    if (correctPosAndColor === sizeLimit) {
      setShowWinningModal(true);
      setShowResult(true);
      setStartTimer(false);
      setPauseTimer(true);
    } else if (counter === 1) {
      setStartTimer(false);
      setShowLosingModal(true);
      setShowResult(true);
      setPauseTimer(true);
    }
  };

  //pass donuts to row
  const passDataToRow = (guessArray) => {
    data[10 - counter] = guessArray;
  };

  //pass pegs to row
  const passAnswerToRow = (pegArray) => {
    pegData[10 - counter] = pegArray;
  };

  //decrease counts
  const decrease = () => {
    setCounter((counter) => counter - 1);
  };

  //reset game
  const reset = () => {
    setStartTimer(false);
    setPauseTimer(false);
    setCounter(10);
    setGuess([]);
    setShowResult(false);
    setData(new Array(10).fill([]));
    setPegData(new Array(10).fill([]));
  };

  //music functions
  const playSong = () => {
    setIsPlaying(true);
    play();
  };

  const stopSong = () => {
    setIsPlaying(false);
    setIsStopping(true);
    stop();
  };

  const pauseSong = () => {
    setIsPlaying(false);
    setIsPausing(true);
    pause();
  };

  useEffect(() => {
    setGuess([]);
  }, []);

  useEffect(() => {
    setShowResult();
  }, []);

  useEffect(() => {
    setSizeLimit(4);
  }, []);

  //if the sizelimit changes fetch the data, only run if size limit changes
  useEffect(() => {
    fetchData();
  }, [sizeLimit]); //its also showing sync update of size limit

  //to only fire the fetch result once for react strict mode. (doesnt matter once deployed to heroku)
  useEffect(() => {
    if (isMounted.current) return;
    isMounted.current = true;
    fetchData();
  }, []);

  return (
    <>
      <video autoPlay muted loop id="video">
        <source src={backgroundVideo} type="video/mp4" />
      </video>

      <div className="container">
        <div
          id="social-media-1"
          className="nes-icon github is-medium"
          onClick={() => window.open("https://kickylau.github.io/", "_blank")}
        ></div>
        <div
          id="social-media-2"
          className="nes-icon linkedin is-medium"
          onClick={() =>
            window.open(" https://www.linkedin.com/in/kickyliu/", "_blank")
          }
        >

        </div>
        <div
          id="social-media-3"
          className="nes-icon instagram is-medium"
          onClick={() =>
            window.open("https://www.instagram.com/kickylau/", "_blank")
          }
        >

        </div>

        <div className="timer">
          <Timer startTimer={startTimer} pauseTimer={pauseTimer} />
        </div>

        <Music
          isPlaying={isPlaying}
          pauseSong={pauseSong}
          playSong={playSong}
          stopSong={stopSong}
        />

        <Rules
          setShowRulesModal={setShowRulesModal}
          showRulesModal={showRulesModal}
          playClick={playClick}
        />

        <div className="challenge-mode">
          <ChallengeMode
            setSizeLimit={setSizeLimit}
            reset={reset}
            playClick={playClick}
          />
        </div>

        <div className="arcade-container">
          <div className="controls">
            <NewGame
              isPlaying={isPlaying}
              isPausing={isPausing}
              pause={pause}
              playClick={playClick}
              fetchData={fetchData}
              reset={reset}
              setShowResult={setShowResult}
            />

            <Guess
              data={data}
              counter={counter}
              sizeLimit={sizeLimit}
              playClick={playClick}
              guess={guess}
              setGuess={setGuess}
              numberGuess={numberGuess}
              randomCode={randomCode}
              decrease={decrease}
            />
          </div>

          <div className="monitor-container">
            <div className="donut-board">
              <DonutBoard
                colorMap={colorMap}
                isPlaying={isPlaying}
                isPausing={isPausing}
                isStopping={isStopping}
                playSong={playSong}
                playDonutClick={playDonutClick}
                addToGuess={addToGuess}
              />
            </div>

            <div className="game-body">
              {[...Array(10)].map((x, idx) => (
                <Row
                  key={`row-${idx}`}
                  passDataToRow={data}
                  passAnswerToRow={pegData}
                  rowIdx={idx}
                  sizeLimit={sizeLimit}
                  isBlue={10 - counter === idx ? "blue" : ""}
                  isGrey={10 - counter > idx ? " grey" : ""}
                  isRed={10 - counter === idx ? "red" : ""}
                  setGuess={setGuess}
                />
              ))}
            </div>
          </div>

          <ResultModal
            showWinningModal={showWinningModal}
            setShowWinningModal={setShowWinningModal}
            showLosingModal={showLosingModal}
            setShowLosingModal={setShowLosingModal}
            fetchData={fetchData}
            reset={reset}
            showResult={showResult}
            randomCode={randomCode}
          />
        </div>
      </div>
    </>
  );
}

export default Game;
