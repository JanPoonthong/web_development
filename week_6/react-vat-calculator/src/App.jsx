import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState("");
  const [b, setB] = useState(0);
  const [vat, setVat] = useState(0);

  function increaseB(a) {
    return setB(count + a);
  }

  function onChangeHanlder(event) {
    const price = event.target.value;
    setA(price);
    setVat(price * 0.07);
  }

  return (
    <>
      <div className="card">
        <input
          type="number"
          style={{ fontSize: "20px" }}
          value={a}
          onChange={(event) => onChangeHanlder(event)}
        ></input>
        <h1>My A = {a === "" ? "0" : a}</h1>
        <h1>VAT = {vat.toFixed(2)}</h1>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <button onClick={() => increaseB(2)}>count is {b}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
