// Items.jsx
import Accordion from 'react-bootstrap/Accordion';
import Item from './Item';

// DESTRUCTURE PROPS FOR CLEANER ACCESS
function Items({ itemsList, handleDelete }) {

  return (
    <section style={{ marginTop: '20px' }}>
      <h2>Todo Items...</h2>
      <Accordion className='itemsAccordion'>

        {/* MAP ITEMS ARRAY TO PASS TO ITEM
            COMPONENT TO STYLE EACH ITEM  */}
        {itemsList.map(item => (
          <Accordion.Item
            key={item._id}
            eventKey={item._id}
          >
            {/* ITEM COMPONENT */}
            <Item
              // PASS PROPS TO ITEM (CHILD) COMPONENT
              key={item._id}
              itemData={item}
              handleDelete={handleDelete}
            />
          </Accordion.Item>
        ))}

      </Accordion>
    </section>
  );
}

export default Items;
