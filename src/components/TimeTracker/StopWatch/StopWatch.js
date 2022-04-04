import { UserNavBar } from "../../nav/UserNavBar"
import { useEffect, useRef } from "react";
import React, { useState } from "react";
import Timer from "../Timer/Timer";
import ControlButtons from "../ControlButtons/ControlButtons";
import { useHistory } from "react-router-dom";

export const StopWatch = () => {
  const history = useHistory()
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [cubeSizes, setCubeSizes] = useState([])
  const [time, setTime] = useState(0);
  const [newSolveTime, setNewSolveTime] = useState({

    "solveTime": "",
    "userId": parseInt(localStorage.getItem("cube_user")),
    "cubeSizeId": 1,
    "timestamp": Date.now()
  })







  const saveSolveTime = (solveTimeObject) => {

    const fetchOption = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(solveTimeObject)
    }

    return fetch("http://localhost:8088/solveTimes", fetchOption)
      .then(() => {
        history.push("/solveTimes")
      })
      .then(() => {
        history.push(`/stopwatch`)
      })
  }






  useEffect(
    () => {
      return fetch(`http://localhost:8088/cubeSizes`)
        .then(response => response.json())
        .then((data) => {
          setCubeSizes(data)
        })
    },
    []
  )


  useEffect(
    () => {
      const copy = { ...newSolveTime }
      copy.solveTime = time
      setNewSolveTime(copy)
      console.log(newSolveTime)
    },
    [isPaused]
  )




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

      <div className="cubeSizeDromDownTimerPage">

        {<fieldset>
          <div className="cubeSize">
            <label htmlFor="cubeSize">Cube Size: </label>
            <select name="cubeSize"
              onChange={(e) => {
                const copy = { ...newSolveTime }
                copy.cubeSizeId = parseInt(e.target.value)
                setNewSolveTime(copy)
              }}
              defaultValue={0}>
              <option value={0} disabled hidden>Select Cube Size...</option>
              {
                cubeSizes.map(
                  (c) => {
                    return (
                      <option key={`cubeSize--${c.id}`} value={`${c.id}`}>
                        {`${c.size}`}
                      </option>
                    )
                  }
                )
              }
            </select>
          </div>
        </fieldset>}
      </div>


      <div className="stop-watch">
        {/* <Timer time={time} /> */}
        <ControlButtons newSolveTime={newSolveTime}
          setNewSolveTime={setNewSolveTime}
          time={time}
          active={isActive}
          isPaused={isPaused}
          handleStart={handleStart}
          setIsActive={setIsActive}
          setIsPaused={setIsPaused}
          handlePauseResume={handlePauseResume}
          handleReset={handleReset}
          getIsPaused={getIsPaused}

        />
        <button className="btn btn-three"
          onClick={
            (evt) => {
              saveSolveTime(newSolveTime)
            }
          }>Save Time</button>
      </div>
    </>
  );
}

export default StopWatch;














