import React, { useState, useEffect, useRef } from 'react';

const Timer = () => {
 const [timer, setTimer] = useState('00:00:00');
 const [start, setStart] = useState(true);

    // const seconds = ("0" + (Math.floor((timer / 1000) % 60) %60)).slice(-2);
    // const minutes = ("0" + Math.floor((timer / 1000 / 60) % 60)).slice(-2);
    // const hours = ("0"+ Math.floor((timer / 1000 / 60 / 60) %60)).slice(-2);


    // useEffect(() => {
    //     let interval = null;
    //     if (start) {
    //       interval = setInterval(() => {
    //       if (timer > 0) {
    //         setTimer(prevTime => prevTime - 10)
    //       }
    //       }, 10)
    //     } else {
    //       clearInterval(interval);
    //     }
    //     return () => {
    //       clearInterval(interval)
    //     }
    //   }, [start])
    //const [counter, setCounter] = useState(0);

    useEffect(() => {
      setInterval(() => {
        setTimer((timer) => timer + 1);
      }, 1000);
    }, []);

    // const Ref = useRef(null);

    // const [timer, setTimer] = useState('00:00:00');

    // const getTimeRemaining = (e) => {
    //     const total = Date.parse(e) - Date.parse(new Date());
    //     const seconds = Math.floor((total / 1000) % 60);
    //     const minutes = Math.floor((total / 1000 / 60) % 60);
    //     const hours = Math.floor((total / 1000 / 60 / 60) % 24);
    //     return {
    //         total, hours, minutes, seconds
    //     };
    // }

    // const startTimer = (e) => {
    //     let { total, hours, minutes, seconds }
    //         = getTimeRemaining(e);
    //     if (total >= 0) {

    //         // update the timer
    //         // check if less than 10 then we need to
    //         // add '0' at the beginning of the variable
    //         setTimer(
    //             (hours > 9 ? hours : '0' + hours) + ':' +
    //             (minutes > 9 ? minutes : '0' + minutes) + ':'
    //             + (seconds > 9 ? seconds : '0' + seconds)
    //         )
    //     }
    // }

    // const clearTimer = (e) => {

    //     // If you adjust it you should also need to
    //     // adjust the Endtime formula we are about
    //     // to code next
    //     setTimer('00:00:00');

    //     // If you try to remove this line the
    //     // updating of timer Variable will be
    //     // after 1000ms or 1sec
    //     if (Ref.current) clearInterval(Ref.current);
    //     const id = setInterval(() => {
    //         startTimer(e);
    //     }, 1000)
    //     Ref.current = id;
    // }

    // const getDeadTime = () => {
    //     let deadline = new Date();

    //     // This is where you need to adjust if
    //     // you entend to add more time
    //     deadline.setSeconds(deadline.getSeconds() + 10);
    //     return deadline;
    // }

    // // We can use useEffect so that when the component
    // // mount the timer will start as soon as possible

    // // We put empty array to act as componentDid
    // // mount only
    // useEffect(() => {
    //     clearTimer(getDeadTime());
    // }, []);


    // // Another way to call the clearTimer() to start
    // // the countdown is via action event from the
    // // button first we create function to be called
    // // by the button
    // const onClickReset = () => {
    //     clearTimer(getDeadTime());
    // }



    return (
        <div className="timer">
              <div>{timer}</div>
        </div>
    );
};

export default Timer;
