import React from "react";
import { ListGroup } from "react-bootstrap";

const TaskItem = ({ dataEnviar, deleteTask }) => {
  return (
    <ListGroup.Item className="d-flex justify-content-between">
      {dataEnviar}{" "}
      <button className="btn btn-danger" onClick={() => deleteTask(dataEnviar)}>
        X
      </button>{" "}
    </ListGroup.Item>
  );
};

export default TaskItem;
