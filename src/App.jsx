import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import { Navbar, Container, Row, Col } from 'react-bootstrap';
import './main.css';
import AddItem from './components/AddItem';
import Items from './components/Items';

// API SERVER URL FROM .env VARIABLE
const API_SERVER = import.meta.env.VITE_APP_API;

function App() {
  // STORE ITEMS FETCHED FROM SERVER IN 'state'
  const [items, setItems] = useState([]);

  // AXIOS GET REQUEST: GET ALL ITEMS
  // 'useCallback' FOR MEMOIZATION
  const getItems = useCallback(async () => {
    try {
      const response = await axios.get(`${API_SERVER}/items`);
      setItems(response.data);
    } catch (error) {
      console.error("Error fetching items:", error);
    }
  }, []);

  // 'useEffect' HOOK TO LOAD ITEMS WHEN COMPONENT MOUNTS
  useEffect(() => {
    getItems();
  }, [getItems]);

  // AXIOS POST REQUEST: add new item to the server
  const addItem = async (item) => {
    try {
      await axios.post(`${API_SERVER}/items`, item);
      getItems(); // Refresh items after adding
    } catch (error) {
      console.error("Error adding item:", error);
    }
  };

  // AXIOS DELETE REQUEST: delete an item from the server
  const deleteItem = async (itemId) => {
    try {
      await axios.delete(`${API_SERVER}/items/${itemId}`);
      getItems(); // Refresh items after deletion
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  return (
    <>
      {/* NAVBAR */}
      <Navbar className="header">
        <Navbar.Brand href="#home">301 Final!</Navbar.Brand>
      </Navbar>

      {/* CONTAINER FOR ADDITEM & ITEMS COMPONENTS */}
      <Container fluid>
        <Row>
          <Col><h1>Our Todo Items</h1></Col>
        </Row>
        <Row>
          {/* ADDITEM COMPONENT - Form */}
          <Col md="auto">
            <AddItem handleAddItem={addItem} />
          </Col>
          {/* ITEMS COMPONENT - Accordion */}
          <Col>
            <Items itemsList={items} handleDelete={deleteItem} />
          </Col>
        </Row>
      </Container>

      {/* FOOTER */}
      <footer className='footer'>
        <h3>&copy; Ekow Inc</h3>
      </footer>
    </>
  );
}

export default App;
