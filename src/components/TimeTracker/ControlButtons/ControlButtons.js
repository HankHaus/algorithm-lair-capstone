import React from "react";
import { useState, useEffect } from "react";




















export default function ControlButtons(props) {
  const handleSpace = (event) => {
    if (event.keyCode === 32) {
   
      if (props.active === false) {
        props.setIsActive(true) 
        props.setIsPaused(false)
       
      }
      if (props.active === true && props.isPaused === false) {
        props.setIsPaused(!props.isPaused)
      
      }
      if (props.active === true && props.isPaused === true) {
        props.setIsActive(true) 
        props.setIsPaused(false)
      }
    }
  }





  useEffect(() => {
    document.addEventListener("keypress", handleSpace)

    return () => document.removeEventListener("keypress", handleSpace)
  }, [props])
 





  const [inputValue, setInputValue] = useState("")
  const StartButton = (
    <div className="btn btn-one btn-start"
      onClick={props.handleStart}

      value={inputValue}

    >
      Start
    </div>
  );
  const ActiveButtons = (
    <div className="btn-grp">
      <div className="btn btn-two"
        onClick={props.handleReset}>
        Reset
      </div>
      <div className="btn btn-one"
        onClick={props.handlePauseResume}


        value={inputValue}


      >
        {props.isPaused ? "Resume" : "Stop"}
      </div>
    </div>
  );

  return (
    <div className="Control-Buttons">
      <div>{props.active ? ActiveButtons : StartButton}</div>
    </div>
  );
}