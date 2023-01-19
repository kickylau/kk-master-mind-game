import React, { useState, useEffect } from "react";

function Timer({ startTimer, pauseTimer }) {
  const initialTime = "00:00:00";
  const [timer, setTimer] = useState(false);
  const [timerDisplay, setTimerDisplay] = useState(initialTime);
  const [startTime, setStartTime] = useState()

  useEffect(() => {
    const interval = setInterval(() => {
      if (!timer && startTimer) {
        setTimer(true)
        setStartTime(Date.now())
      }
      if (startTimer) {
        let seconds = Math.floor((Date.now() - startTime) / 1000)
        let timeString = secondsToHms(seconds)
        setTimerDisplay(timeString)
      } else if (pauseTimer) {
        return;
      } else { //stop timer and reset it
        clearInterval(interval);
        setTimer(false);
        setTimerDisplay(initialTime);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  });

  useEffect(() => {
    let timeString = secondsToHms(timer);
    setTimerDisplay(timeString);
  }, [timer]);

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor((d % 3600) / 60);
    var s = Math.floor((d % 3600) % 60);

    var hDisplay = h > 9 ? h : "0" + h;
    var mDisplay = m > 9 ? m : "0" + m;
    var sDisplay = s > 9 ? s : "0" + s;

    return hDisplay + ":" + mDisplay + ":" + sDisplay;
  }

  return <div className="timer">{timerDisplay}</div>;

}

export default Timer;
