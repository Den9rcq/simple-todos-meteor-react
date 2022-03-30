import { Meteor } from 'meteor/meteor';
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

Meteor.startup(() => {
  if (TasksCollection.find().count() === 0) {
    [
      'Make physical charging',
      'To take a shower',
      'Have breakfast',
      'English lesson',
      'Programming lesson',
      'Dinner',
      'Programming lesson'
    ].forEach(insertTask)
  }
});
