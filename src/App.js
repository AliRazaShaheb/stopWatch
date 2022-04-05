import { useRef, useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <TimoutTimer />
    </div>
  );
}

// TWO INPUT

const TimoutTimer = () => {
  const mySec = useRef();
  const myMin = useRef();

  const [time, setTime] = useState({
    minutes: "00",
    seconds: "00"
  });
  const handleStart = () => {};

  const handleSetTimer = () => {
    setTime({
      minutes: myMin.current.value,
      seconds: mySec.current.value
    });
  };

  return (
    <div>
      <div>
        <h1>
          {time.minutes}:<span>{time.seconds}</span>
        </h1>
      </div>
      <div>
        <input type="text" id="minutes" placeholder="set minutes" ref={myMin} />
        <input type="text" id="seconds" placeholder="set seconds" ref={mySec} />
      </div>
      <div
        style={{
          display: "flex",
          gap: "1rem",
          justifyContent: "center",
          marginTop: "1rem"
        }}
      >
        <button onClick={handleStart}>start</button>
        <button onClick={handleSetTimer}>setTimer</button>
        <button>reset</button>
        <button>stop</button>
      </div>
    </div>
  );
};
