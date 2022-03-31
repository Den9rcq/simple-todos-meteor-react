import React from "react";

const Header = ({ pendingTasksCount }) => {
  const pendingTasksTitle = pendingTasksCount ? `(${pendingTasksCount})` : ""

  return (
    <header>
      <div className="app-bar">
        <div className="app-header">
          <h1>
            📝️ To Do List
            {pendingTasksTitle}
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
