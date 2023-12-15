// Items.jsx
import React from 'react';
import Table from 'react-bootstrap/Table';
import Item from './Item'; // Import the new Item component

function Items({ itemsList, handleDelete }) { // Destructure props for cleaner access

  return (
    <section>
      <h2>Items...</h2>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {itemsList.map(item => 
            <Item
              key={item._id}
              itemData={item}
              handleDelete={handleDelete}
            />
          )}
        </tbody>
      </Table>
    </section>
  );
}

export default Items;
