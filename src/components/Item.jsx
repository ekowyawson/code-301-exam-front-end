// Item.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';

function Item({ itemData, handleDelete }) {

    const deleteItem = () => {
        handleDelete(itemData._id);
      };

  return (
    <tr>
      <td>{itemData.name}</td>
      <td>{itemData.description}</td>
      <td>
        <Button
            onClick={deleteItem}
            data-testid={`delete-button-${itemData.name}`}>
          Delete Item
        </Button>
      </td>
    </tr>
  );
}

export default Item;