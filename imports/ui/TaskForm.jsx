import React, { useState } from 'react';
import { TasksCollection } from "../api/TasksCollection";

const TaskForm = () => {
  const [text, setText] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    if (!text) return;

    TasksCollection.insert({
      text: text.trim(),
      createdAt: new Date()
    });

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
        onChange={({target}) => setText(target.value)}
      />

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;