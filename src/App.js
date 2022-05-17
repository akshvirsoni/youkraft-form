import { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import './App.css';
import Data from './components/Data';
import { useGlobalContext } from './context';

function App() {

  const [formObject, setFormObject] = useState({ name: "", age: 0, email: "", phoneNumber: 0 });
  const [isValidated, setIsValidated] = useState(false);
  const { addData } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsValidated(true);
    if (formObject.name && formObject.age > 0 && formObject.email && formObject.phoneNumber.length === 10) {
      addData(formObject);
      handleReset();
    }
  }

  const handleReset = () => {
    setFormObject({ name: "", age: 0, email: "", phoneNumber: 0 });
    setIsValidated(false);
  }

  return (
    <Container className="content">
      <div>
        <h3>Information Form</h3>
        <Form noValidate onSubmit={handleSubmit} validated={isValidated}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Name:</Form.Label>
            <Form.Control required type="text" placeholder="John Doe" value={formObject.name} onChange={(e) => setFormObject({ ...formObject, name: e.target.value })} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid name.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Email:</Form.Label>
            <Form.Control required type="email" placeholder="email@example.com" value={formObject.email} onChange={(e) => setFormObject({ ...formObject, email: e.target.value })} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid email.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Age:</Form.Label>
            <Form.Control required type="number" min={10} value={formObject.age} onChange={(e) => setFormObject({ ...formObject, age: e.target.value })} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid age.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control required type="number" min={1000000000} max={9999999999} value={formObject.phoneNumber} onChange={(e) => setFormObject({ ...formObject, phoneNumber: e.target.value })} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid phone number.
            </Form.Control.Feedback>
          </Form.Group>
          <div className="form-buttons">
            <Button variant="primary" type="submit">Submit form</Button>
            <Button variant="danger" type="reset" onClick={handleReset}>Reset</Button>
          </div>
        </Form>
      </div>
      <Data />
    </Container>
  );
}

export default App;
