import { useRef } from "react";

function App() {
  const quantityRef = useRef();
  const productRef = useRef();

  const handleInput = () => {
    const order = {
      quantity: quantityRef.current.value,
      product: productRef.current.value,
    };
    console.table(order);
  };

  return (
    <>
      <label>Product: </label>
      <select ref={productRef}>
        <option value="1">Product 1</option>
        <option value="2">Product 2</option>
        <option value="3">Product 3</option>
      </select>

      <br />

      <label>Quantity: </label>
      <input type="number" ref={quantityRef}></input>
      <button onClick={handleInput}>Submit</button>
    </>
  );
}

export default App;
