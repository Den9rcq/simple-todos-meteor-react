import React from 'react';
import Task from "./Task";

const tasks = [
  { _id: 1, text: 'Physical exercise' },
  { _id: 2, text: 'To take a shower' },
  { _id: 3, text: 'Have breakfast' },
];

export const App = () => (
  <div>
    <h1>Welcome to Meteor!</h1>
    {tasks.map(task => <Task key={task._id} task={task}/>)}
  </div>
);
