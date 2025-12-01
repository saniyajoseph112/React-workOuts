import { useState, useRef } from "react";

export default function Timers() {
  const [time, setTime] = useState(0); // time in milliseconds
  const [running, setRunning] = useState(false);
  const startTimeRef = useRef(null);
  const intervalRef = useRef(null);

  const start = () => {
    if (running) return;
    setRunning(true);
    startTimeRef.current = Date.now() - time;
    intervalRef.current = setInterval(() => {
      setTime(Date.now() - startTimeRef.current);
    }, 10); // update every 10ms 
  };

  const stop = () => {
    setRunning(false);
    clearInterval(intervalRef.current);
  };

  const reset = () => {
    stop();
    setTime(0);
  };

  const seconds = Math.floor(time / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  return (
    <div style={{ textAlign: "center", fontSize: "2rem" }}>
      <h1>
        {seconds.toString().padStart(2, "0")}:
        {milliseconds.toString().padStart(2, "0")}
      </h1>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
}