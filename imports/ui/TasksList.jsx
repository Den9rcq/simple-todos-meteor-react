import React from "react";
import Task from "./Task";

const TasksList = ({ tasks, handleToggleChecked, handleDeleteChecked }) => {
  return (
    <ul className="tasks">
      {tasks.map(task => (
        <Task
          key={task._id}
          task={task}
          onCheckboxClick={handleToggleChecked}
          onDeleteClick={handleDeleteChecked}
        />
      ))}
    </ul>
  );
};

export default TasksList;
