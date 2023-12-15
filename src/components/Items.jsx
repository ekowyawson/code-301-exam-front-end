// Items.jsx
import React from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Item from './Item';

function Items({ itemsList, handleDelete }) { // Destructure props for cleaner access

  return (
    <section style={{ marginTop: '20px' }}>
      <h2>Items...</h2>
      <Accordion className='itemsAccordion'>

        {itemsList.map(item => (
          <Accordion.Item
            key={item._id}
            eventKey={item._id}
          >
            <Item
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
