import React from "react";
import Button from "./Button";

const Task = ({ task, onCheckboxClick, onDeleteClick }) => {
  return (
    <label>
    <li className="flex justify-between items-center p-5 mb-5 bg-gray-100 rounded-lg rounded-xl shadow hover:bg-gray-200 transition duration-300 ">
        <div>
          <input
            className="mr-2 h-4 w-4"
            type="checkbox"
            checked={task.isChecked}
            onClick={() => onCheckboxClick(task)}
            readOnly
          />
          <span className="text-purple-500 text-xl">{task.text}</span>
        </div>
      <Button
        className="btn btn-red"
        handelClick={() => onDeleteClick(task)}
        title="&times;"
      />
    </li>
    </label>
  );
};

export default Task;
