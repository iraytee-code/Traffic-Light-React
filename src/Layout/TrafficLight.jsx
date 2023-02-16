import React, { useState, useEffect, Fragment } from "react";
import Button from "../components/Button";
function TrafficLight() {
  const [countdown, setCountdown] = useState(10);
  const [currentGoColor, setCurrentGoColor] = useState("bg-green-700");
  const [currentWaitColor, setCurrentWaitColor] = useState("bg-white");
  const [currentStopColor, setCurrentStopColor] = useState("bg-white");
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;

    if (running) {
      intervalId = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);
    }

    if (countdown === 0) {
      if (currentGoColor === "bg-green-700") {
        setCurrentGoColor("bg-white");
        setCurrentStopColor("bg-white");
        setCurrentWaitColor("bg-yellow-500");
        setCountdown(5);
      } else if (currentWaitColor === "bg-yellow-500") {
        setCurrentWaitColor("bg-white");
        setCurrentStopColor("bg-red-700");
        setCountdown(10);
      } else {
        setCurrentGoColor("bg-green-700");
        setCurrentStopColor("bg-white");
        setCountdown(10);
      }
    }

    return () => clearInterval(intervalId);
  }, [
    countdown,
    currentGoColor,
    setCurrentWaitColor,
    setCurrentStopColor,
    running,
  ]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleStop = () => {
    setRunning(false);
  };

  const handleReset = () => {
    setCountdown(10);
    setCurrentGoColor("bg-green-700");

    setRunning(false);
  };

  return (
    <Fragment>
      <div className="w-screen h-screen  overflow-hidden flex-col justify-center items-center">
        <div className="w-[300px] mx-auto bg-red-500">
          <Button onClick={handleStart} title="Start" />
          <Button onClick={handleStop} title="Stop" />
          <Button onClick={handleReset} title="Reset" />
        </div>
        <div className="w-screen h-screen  overflow-hidden flex justify-center items-center">
          <div className="w-[200px] bg-blue-500 rounded-3xl p-2 ">
            <div className="w-full">
              <div className={`traffic-light ${currentGoColor} mx-auto`} />
              <div className={`traffic-light ${currentWaitColor}`} />
              <div className={`traffic-light ${currentStopColor}`} />
            </div>
            <div className="timer">{countdown}</div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default TrafficLight;
