import React, { useEffect, useState } from "react";
import { Meteor } from "meteor/meteor";
import { useTracker } from "meteor/react-meteor-data";
import { TasksCollection } from "/imports/db/TasksCollection";
import TaskForm from "./TaskForm";
import LoginForm from "./LoginForm";
import Header from "./Header";
import Button from "./Button";
import Filter from "./Filter";
import TasksList from "./TasksList";
import { strings } from "../utils/localization";

export const App = () => {
  const [lang, setLang] = useState('')
  const [hideCompleted, setHideCompleted] = useState(false);
  const hideCompletedFilter = { isChecked: { $ne: true } };

  const user = useTracker(() => Meteor.user());
  const userFilter = user ? { userId: user._id } : {};

  const pendingOnlyFilter = { ...hideCompletedFilter, ...userFilter };

  useEffect(() => {
    setLang(strings.getLanguage())
  }, [lang])

  const { tasks, pendingTasksCount, isLoading } = useTracker(() => {
    const noDataAvailable = { tasks: [], pendingTasksCount: 0 };
    if (!Meteor.user()) {
      return noDataAvailable;
    }
    const handler = Meteor.subscribe('tasks');

    if (!handler.ready()) {
      return { ...noDataAvailable, isLoading: true };
    }

    const tasks = TasksCollection.find(
      hideCompleted ? pendingOnlyFilter : userFilter,
      {
        sort: { createdAt: -1 },
      }
    ).fetch();
    const pendingTasksCount = TasksCollection.find(pendingOnlyFilter).count();

    return { tasks, pendingTasksCount };
  });

  const logout = () => Meteor.logout();

  const toggleChecked = ({ _id, isChecked }) =>
    Meteor.call("tasks.setIsChecked", _id, !isChecked);

  const deleteTask = ({ _id }) => Meteor.call("tasks.remove", _id);

  const getHideCompleted = () => setHideCompleted(!hideCompleted);

  const changeLang = () => {
    setLang(prevState => prevState === "ru" ? "en" : "ru")
  }
  strings.setLanguage(lang)

  return (
    <div className="container mx-auto m-2 p-5">
      <Header
        lang={lang}
        pendingTasksCount={pendingTasksCount}
        handleClick={changeLang}/>

      <div className="flex flex-col gap-10">
        {user ? (
          <>
            <div className="self-end">
              <Button
                className="btn btn-red"
                title={`${user.username} 🚪 ${strings.logout}`}
                handelClick={logout}/>
            </div>

            <TaskForm/>

            <Filter
              hideCompleted={hideCompleted}
              handelClick={getHideCompleted}/>

            {isLoading
              ? <div className="loading">loading...</div>
              : <TasksList
                tasks={tasks}
                handleToggleChecked={toggleChecked}
                handleDeleteChecked={deleteTask}/>}
          </>
        ) : (
          <LoginForm/>
        )}
      </div>
    </div>
  );
};
