import React from "react";
import { ListGroup } from "react-bootstrap";
import TaskItem from "./TaskItem";

const TaskList = ({ taskArray, deleteTask }) => {
  return (
    <div>
      <ListGroup>
        {taskArray.map((task, index) => (
          <TaskItem
            dataEnviar={task}
            key={index}
            deleteTask={deleteTask}
          ></TaskItem>
        ))}
      </ListGroup>
    </div>
  );
};

export default TaskList;
