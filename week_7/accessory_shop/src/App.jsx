import { useState, useRef } from "react";
import accessoryData from "./accessory.json";
import DataTable from "./components/DataTable";

function App() {
  const quantityRef = useRef();
  const productRef = useRef();
  const [price, setPrice] = useState(accessoryData[0].price);

  const handleInput = () => {
    quantityRef.current.value;
    productRef.current.value;
  };

  const updatePrice = (event) => {
    const productID = parseInt(event.target.value);
    const product = accessoryData.find(
      (accessory) => accessory.id === productID,
    );
    setPrice(product.price);
  };

  return (
    <>
      <label>Product: </label>
      <select ref={productRef} onChange={updatePrice}>
        {accessoryData.map((accessory, index) => {
          return (
            <option key={index} value={accessory.id}>
              {accessory.name}
            </option>
          );
        })}
      </select>

      <br />

      <p>Price: {price}</p>

      <label>Quantity: </label>
      <input type="number" ref={quantityRef}></input>
      <button onClick={handleInput}>Submit</button>

      <DataTable data={accessoryData}></DataTable>
    </>
  );
}

export default App;
