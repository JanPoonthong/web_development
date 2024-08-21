import { useState, useRef } from "react";
import accessoryData from "./accessory.json";
import DataTable from "./components/DataTable";
import { Button } from "react-bootstrap";

function App() {
  const quantityRef = useRef();
  const productRef = useRef();
  const [price, setPrice] = useState(accessoryData[0].price);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSubmit = () => {
    const productID = parseInt(productRef.current.value);
    const product = accessoryData.find(
      (accessory) => accessory.id === productID,
    );

    const order = {
      ...product,
      quantity: quantityRef.current.value,
    };

    setSelectedItems((oldState) => [...oldState, order]);
    setPrice(product.price);
  };

  const updatePrice = (event) => {
    const productID = parseInt(event.target.value);
    const product = accessoryData.find(
      (accessory) => accessory.id === productID,
    );
    setPrice(product.price);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-2"> Product: </div>

        <div className="col-10">
          <select ref={productRef} onChange={updatePrice}>
            {accessoryData.map((accessory, index) => {
              return (
                <option key={index} value={accessory.id}>
                  {accessory.name}
                </option>
              );
            })}
          </select>
        </div>

        <div className="col-2"> Price: </div>
        <div className="col-10"> {price} </div>

        <div className="col-2"> Quantity: </div>

        <div className="col-10"></div>
        <input type="number" ref={quantityRef}></input>
      </div>
      <Button onClick={handleSubmit}>Submit</Button>

      <DataTable data={selectedItems}></DataTable>
    </div>
  );
}

export default App;
