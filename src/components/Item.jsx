// Item.jsx
import React from 'react';
import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

function Item({ itemData, handleDelete }) {

  const deleteItem = () => {
    handleDelete(itemData._id);
  };

  return (
    <>
      <Accordion.Header>{itemData.name}</Accordion.Header>

      <Accordion.Body>
        {itemData.description}
        <div>
          <Button
            variant="danger"
            onClick={deleteItem}
            data-testid={`delete-button-${itemData.name}`}>
            Delete Item
          </Button>
        </div>
      </Accordion.Body>
    </>
  );
}

export default Item;