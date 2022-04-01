import React from "react";
import { strings } from "../utils/localization";

const Header = ({ pendingTasksCount }) => {
  const pendingTasksTitle = pendingTasksCount ? ` (${pendingTasksCount})` : ""

  return (
    <header>
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 shadow-md p-4 mb-3 rounded-xl">
          <h1 className="text-2xl text-gray-50">
            {strings.titleApp}
            {pendingTasksTitle}
          </h1>
      </div>
    </header>
  );
};

export default Header;
