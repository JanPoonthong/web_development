import { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [vat, setVat] = useState(0);

  function increaseA() {
    setA(a + 1)
  }

  function increaseB() {
    setVat(count + a)
  }

  function onChangeHanlderPrice(event) {
    const price = event.target.value;
    setA(price);
    setVat(price * 0.07);
  }

  function onChangeHanlderDiscount(event) {
    const discount = event.target.value;
    setB(discount)
    setVat((a - discount) * 0.07);
  }


  return (
    <>
      <div className="card">
        <label htmlFor="">Price: </label>
      <input
          type="number"
          style={{ fontSize: "20px" }}
          value={a}
          placeholder="Price"
          onChange={(event) => onChangeHanlderPrice(event)}
        ></input><br /><br />
        <label htmlFor="">Discount: </label>
        <input
          type="number"
          style={{ fontSize: "20px" }}
          value={b}
          placeholder="Discount"
          onChange={(event) => onChangeHanlderDiscount(event)}
        ></input>

        <h1>My A = {a === "" ? "0" : a}</h1>
        <h1>VAT = {Math.round(vat * 100) / 100}</h1>

        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        {/* <button onClick={() => increaseA()}>Increase A</button> */}
        {/* <button onClick={() => increaseB()}>Increase B</button> */}
      </div>
    </>
  );
}

export default App;
