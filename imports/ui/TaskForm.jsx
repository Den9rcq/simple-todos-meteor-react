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
      className="flex justify-between"
      onSubmit={handleSubmit}>
      <input
        className="w-4/5 p-2 input input-red"
        type="text"
        placeholder="Type to add new tasks"
        value={text}
        onChange={({ target }) => setText(target.value)}
      />

      <button
        className="btn btn-red"
        type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;
