import React from "react";
import { Meteor } from "meteor/meteor";

const Header = ({ pendingTasksCount }) => {
  const pendingTasksTitle = pendingTasksCount ? ` (${pendingTasksCount})` : ""
  const logout = () => Meteor.logout();

  return (
    <header>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md p-4 mb-3 rounded-xl">
          <h1 className="text-2xl text-gray-50">
            📝️ To Do List
            {pendingTasksTitle}
          </h1>
      </div>
    </header>
  );
};

export default Header;
