import { UserNavBar } from "../../nav/UserNavBar"

import { useRef } from "react";





import React, { useState } from "react";

import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";

export const StopWatch = () => {
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);


  React.useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused]);



  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
  };

  const handleReset = () => {
    setIsActive(false);
    setTime(0);
  };


  const getIsPaused = () => {
    return isPaused
  }

  return (
    <>
      <UserNavBar /> 
      <div className="stop-watch">
        <Timer time={time} />
        <ControlButtons
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          setIsActive={setIsActive}
          setIsPaused={setIsPaused}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
          getIsPaused={getIsPaused}

        />
      </div>
    </>
  );
}

export default StopWatch;














