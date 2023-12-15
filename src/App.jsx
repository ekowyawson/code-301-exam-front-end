import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Navbar, Container, Row, Col } from 'react-bootstrap';

import './main.css';

import Form from './components/AddItem';
import Items from './components/Items';

// Ensure this environment variable is set in your project settings
const API_SERVER = import.meta.env.VITE_APP_API;

function App() {
  const [items, setItems] = useState([]);

  // Fetch items from server
  const getItems = useCallback(async () => {
    try {
      const response = await axios.get(`${API_SERVER}/items`);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }, []);

  useEffect(() => {
    getItems();
  }, [getItems]);

  // Add new item to server
  const addItem = async (item) => {
    try {
      await axios.post(`${API_SERVER}/items`, item);
      getItems();
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // Delete item from server
  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`${API_SERVER}/items/${itemId}`);
      getItems();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      <Navbar className="header">
        <Navbar.Brand href="#home">301 Final!</Navbar.Brand>
      </Navbar>
      <Container fluid>
        <Row>
          <Col><h1>Our Items</h1></Col>
        </Row>
        <Row>
          <Col md="auto">
            <Form handleAddItem={addItem} />
          </Col>
          <Col>
            <Items itemsList={items} handleDelete={deleteItem} />
          </Col>
        </Row>
      </Container>
      <footer className='footer'>
        <h3>&copy; Ekow Inc</h3>
      </footer>
    </>
  );
}

export default App;
