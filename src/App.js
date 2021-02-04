import React from "react";
import "./App.css";
import { useSelector } from "react-redux";
import { increment } from "./actions";
import { decrement } from "./actions";
import { useDispatch } from "react-redux";
function App() {
  const counter = useSelector((state) => state.counter);
  const logged = useSelector((state) => state.logged);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <h1>Counter: {counter}</h1>

      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {logged ? "Hello" : "Not Logged in"}
    </div>
  );
}

export default App;
