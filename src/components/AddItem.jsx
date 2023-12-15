// AddNewItem.jsx
import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

function AddItem({ handleAddItem }) { // Destructure props for cleaner access

  const [formData, setFormData] = useState({ name: '', description: '' });

  function handleChange(event) {
    const { name, value } = event.target; // Destructuring for cleaner code
    setFormData(prevFormData => (
      { ...prevFormData, [name]: value }
    ));
  }

  function handleSubmit(event) {
    event.preventDefault();
    handleAddItem(formData);
    setFormData({ name: '', description: '' }); // Reset the form after submission
  }

  return (
    <Form data-testid="add-form" onSubmit={handleSubmit}>
      <Card style={{ width: '18rem' }} >
        <Card.Header>Add Item</Card.Header>
        <Card.Body>
          <Form.Group>
            <Form.Label>Item</Form.Label>
            <Form.Control 
              type="text"
              placeholder="To Do Item"
              data-testid="add-form-name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control 
              type="text"
              placeholder="Description"
              data-testid="add-form-description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />
          </Form.Group>
          <br />
          <Button className='submitBtn' type="submit">Add Item</Button>
        </Card.Body>
      </Card>
    </Form>
  );
}

export default AddItem;
