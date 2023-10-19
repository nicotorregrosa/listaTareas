import React from "react";
import { ListGroup } from "react-bootstrap";

const TaskItem = ({ dataEnviar }) => {
  return <ListGroup.Item>{dataEnviar}</ListGroup.Item>;
};

export default TaskItem;
