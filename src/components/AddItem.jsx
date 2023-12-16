import { useState } from 'react';
import { Card, Form, Button } from 'react-bootstrap';

// DESTRUCTURE PROPS FOR CLEANER ACCESS
function AddItem({ handleAddItem }) {
  const [formData, setFormData] = useState({ name: '', description: '' });

  // ADD FORM DATA ON CHANGE AND SET IN STATE
  function handleChange(event) {
    // Destructuring for cleaner code
    const { name, value } = event.target;
    setFormData(prevFormData => (
      { ...prevFormData, [name]: value }
    ));

    console.log({[name]: value});
  }

  // FUNCTION TO RUN 'handleAddItem' PROP ON SUBMIT EVENT
  // 'handleAddItem' FUNCTION IS DEFINED IN App.js
  function handleSubmit(event) {
    event.preventDefault();
    handleAddItem(formData);
    // Reset the form after submission
    setFormData({ name: '', description: '' });
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
