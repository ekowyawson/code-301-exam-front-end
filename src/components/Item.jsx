import Button from 'react-bootstrap/Button';
import Accordion from 'react-bootstrap/Accordion';

// DESTRUCTURE PROPS FOR CLEANER ACCESS
function Item({ itemData, handleDelete }) {

  // HANDLE DELETE BY ID BY USING 'deleteItem' PROP
  // 'deleteItem' FUNCTION PROP DEFINED IN App.js
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
            onClick={deleteItem} //Run 'deleteItem' function on item
            data-testid={`delete-button-${itemData.name}`}>
            Delete Item
          </Button>
        </div>
      </Accordion.Body>
    </>
  );
}

export default Item;