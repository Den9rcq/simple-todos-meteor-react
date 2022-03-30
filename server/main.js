import { Meteor } from 'meteor/meteor';
import { Accounts } from "meteor/accounts-base";
import { TasksCollection } from '/imports/api/TasksCollection';

const insertTask = taskText => TasksCollection.insert({ text: taskText });

const SEED_USERNAME = 'meteorite';
const SEED_PASSWORD = 'password';

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
  if (!Accounts.findUserByUsername(SEED_USERNAME)) {
    Accounts.createUser({
      username: SEED_USERNAME,
      password: SEED_PASSWORD,
    });
  }
});
