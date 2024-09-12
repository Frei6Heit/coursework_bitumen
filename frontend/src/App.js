import { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import './App.css';
 
function App() {
  const [todoItems, setTodoItems] = useState([]);
 
  useEffect(() => {
    fetch('http://localhost:3010/api/todo-items')
      .then((res) => res.json())
      .then((result) => setTodoItems(result.data));
  }, []);
 
  return (
    <div>
      {todoItems.map((item) => (
        <Form.Group key={item.id} className="app__todo-item">
          <Form.Check type="checkbox" checked={item.done} />
          <Form.Control type="text" value={item.text} />
        </Form.Group>
      ))}
    </div>
  );
}
 
export default App;