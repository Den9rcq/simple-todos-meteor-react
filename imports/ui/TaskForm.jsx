import React, { useState } from 'react';
import { Meteor } from "meteor/meteor";

const TaskForm = () => {
  const [text, setText] = useState("");

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    Meteor.call("tasks.insert", text);

    setText("");
  };

  return (
    <form
      className="task-form"
      onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
