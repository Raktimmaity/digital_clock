import { useState } from "react";
import "./App.css";

function App() {
  let time = new Date().toLocaleTimeString();
  const [currentTime, setCurrentTime] = useState(time);
  const updatedTime = () => {
    let time = new Date().toLocaleTimeString();
    setCurrentTime(time);
  };
  setInterval(updatedTime, 1000);
  return (
    <>
      <h1 className="p-2 bg-white rounded-md size shadow-2xl">{currentTime}</h1>
    </>
  );
}

export default App;
