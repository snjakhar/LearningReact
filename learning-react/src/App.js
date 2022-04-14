import { useState } from "react";
import "./App.css";
import User from "./User";

export default function App() {
  const [count, setCount] = useState(0);
  function countHandler(c) {
    setCount(c + 1);
  }
  return (
    <div className="App">
      <User name="raja"countHandler></User>
      <h1>{count}</h1>
    </div>
  );
}
