import React, { useState } from 'react';
import { Meteor } from "meteor/meteor";
import { strings } from "../utils/localization";

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
        placeholder={strings.placeholderTask}
        value={text}
        onChange={({ target }) => setText(target.value)}
      />

      <button
        className="btn btn-red"
        type="submit">{strings.btnAddTask}</button>
    </form>
  );
};

export default TaskForm;
