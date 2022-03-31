import React from "react";

const Header = ({ pendingTasksCount }) => {
  const pendingTasksTitle = pendingTasksCount ? `(${pendingTasksCount})` : ""

  return (
    <header>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-4 rounded-xl">
          <h1 className="text-2xl text-gray-50">
            📝️ To Do List
            {pendingTasksTitle}
          </h1>
      </div>
    </header>
  );
};

export default Header;
