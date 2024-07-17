import { useState, useRef } from "react";
import accessoryData from "./accessory.json";
import DataTable from "./components/DataTable";

function App() {
  const quantityRef = useRef();
  const productRef = useRef();
  const [price, setPrice] = useState(accessoryData[0].price);
  const [selectedItems, setSelectedItems] = useState([{}])

  const handleSubmit = () => {
    const productID = parseInt(productRef.current.value);
    const product = accessoryData.find(
      (accessory) => accessory.id === productID
    );

    const order = {
      ...product,
      quantity: quantityRef.current.value
    }

    setSelectedItems(oldState => [...oldState, order])
    setPrice(product.price);
  };

  const updatePrice = (event) => {
    const productID = parseInt(event.target.value);
    const product = accessoryData.find(
      (accessory) => accessory.id === productID
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
      <button onClick={handleSubmit}>Submit</button>

      <DataTable data={selectedItems}></DataTable>
    </>
  );
}

export default App;
