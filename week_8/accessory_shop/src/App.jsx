import { useState, useRef } from "react";
import accessoryData from "./accessory.json";
import DataTable from "./components/DataTable";
import { Container, Row, Col, Button } from "react-bootstrap";

function App() {
  const quantityRef = useRef();
  const productRef = useRef();
  const [price, setPrice] = useState(accessoryData[0].price);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSubmit = () => {
    const productID = parseInt(productRef.current.value);
    const product = accessoryData.find(
      (accessory) => accessory.id === productID
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
      (accessory) => accessory.id === productID
    );
    setPrice(product.price);
  };

  const deleteItemByIndex = (index) => {
    selectedItems.splice(index, 1);
    setSelectedItems([...selectedItems]);
  };

  return (
    <>
      <Container>
        <Row>
          <Col xs={2}> Product: </Col>
          <Col xs={10}>
            <select ref={productRef} onChange={updatePrice}>
              {accessoryData.map((accessory, index) => (
                <option key={index} value={accessory.id}>
                  {accessory.name}
                </option>
              ))}
            </select>
          </Col>
        </Row>
        <Row>
          <Col xs={2}> Price: </Col>
          <Col xs={10}> {price} </Col>
        </Row>
        <Row>
          <Col xs={2}> Quantity: </Col>
          <Col xs={10}>
            <input type="number" ref={quantityRef} defaultValue={1} />{" "}
          </Col>
        </Row>
        <Button onClick={handleSubmit}>Submit</Button>
      </Container>

      <Container>
        <DataTable data={selectedItems} onDelete={deleteItemByIndex} />
      </Container>
    </>
  );
}

export default App;
