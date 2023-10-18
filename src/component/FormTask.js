import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

const Formtask = () => {
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3 text-center">
          <Form.Control
            className="mb-3"
            type="text"
            placeholder="Ingresar tarea"
            onChange={(event) => setTask(event.target.value)}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
    </>
  );
};

export default Formtask;