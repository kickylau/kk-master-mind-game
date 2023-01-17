import React, { useState, useEffect } from 'react';

const Timer = ({ startTimer, pauseTimer }) => {
  let initialTime = "00:00:00"
  const [timer, setTimer] = useState(0);
  const [timerDisplay, setTimerDisplay] = useState(initialTime);

  //console.log("actual time:", Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      //console.log("startTimer", startTimer, " pauseTimer", pauseTimer)
      if (startTimer) {
        let timeString = secondsToHms(timer)
        setTimerDisplay(timeString)
        setTimer(timer + 1)
      } else if (pauseTimer) {
        return
      } else {
        setTimer(0)
        setTimerDisplay(initialTime)
      }
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  })

  function secondsToHms(d) {
    d = Number(d);
    var h = Math.floor(d / 3600);
    var m = Math.floor(d % 3600 / 60);
    var s = Math.floor(d % 3600 % 60);

    var hDisplay = h > 9 ? h : "0" + h
    var mDisplay = m > 9 ? m : "0" + m
    var sDisplay = s > 9 ? s : "0" + s

    return hDisplay + ":" + mDisplay + ":" + sDisplay;
  }

  return (
    <div className="timer">{timerDisplay}</div>
  );
};

export default Timer;
