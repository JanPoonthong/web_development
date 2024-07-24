import Table from "react-bootstrap/Table";

const DataTable = ({ data, onDelete }) => {

  const handleDelete = (index) => {
    onDelete(index);
  };

  return (
    <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Qty</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, index) => (
          <tr key={index}>
            <td>
              <i
                className="bi bi-trash"
                onClick={() => handleDelete(index)}
              ></i>
            </td>
            <td>{item.name}</td>
            <td>{item.quantity}</td>
            <td>{item.price}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DataTable;
