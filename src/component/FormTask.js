import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import TaskList from "./TaskList";

const Formtask = () => {
  let taskFromLocalStorage = JSON.parse(localStorage.getItem("tasklist")) || [];
  const [task, setTask] = useState("");
  const [tasks, setTasks] = useState(taskFromLocalStorage);
  const handleSubmit = (event) => {
    event.preventDefault();
    setTasks([...tasks, task]);
    setTask("");
  };

  // Aquí uso el ciclo de vida del componente.

  /*useEffect(() => {
    //Aquí se ejecuta tanto el montaje como la actualización.
  });*/

  /*useEffect(() => {
    //Aquí se ejecuta solo el montaje.
  }, []);*/

  useEffect(() => {
    //Aquí se ejecuta tanto el montaje como la actualización pero dependiendo de uno o más states.
    localStorage.setItem("tasklist", JSON.stringify(tasks));
  }, [tasks]);

  const deleteTask = (taskName) => {
    let filterArray = tasks.filter((task) => task !== taskName);
    setTasks(filterArray);
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
            value={task}
          />
          <Button variant="primary" type="submit">
            Agregar
          </Button>
        </Form.Group>
      </Form>
      <section className="container">
        <TaskList taskArray={tasks} deleteTask={deleteTask}></TaskList>
      </section>
    </>
  );
};

export default Formtask;
