import { useState } from "react";

export default function TickTock() {
  const [count, setCount] = useState(0);
  const [timer, setTimer] = useState<NodeJS.Timer>();
  const [isRunning, setIsRunning] = useState(false);
  const handleToggle = () => {
    if (isRunning) {
      timer && clearInterval(timer);
      setIsRunning(false);
    } else {
      setIsRunning(true);
      const interval = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);

      setTimer(interval);
    }
  };
  const reset = () => {
    setIsRunning(false);
    timer && clearInterval(timer);
    setCount(0);
  };
  return (
    <>
      <div>TickTock</div>
      <p>{count}</p>
      <button onClick={reset}>reset</button>
      <button onClick={handleToggle}>{isRunning ? "pause" : "start"}</button>
    </>
  );
}
