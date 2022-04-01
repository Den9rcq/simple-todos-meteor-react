import React from "react";
import { strings } from "../utils/localization";
import Button from "./Button";

const Header = ({ lang, pendingTasksCount, handleClick }) => {
  const pendingTasksTitle = pendingTasksCount ? ` (${pendingTasksCount})` : ""

  return (
    <header>
      <div className="header flex-center">
        <h1 className="text-2xl text-gray-50">
          {strings.titleApp}
          {pendingTasksTitle}
        </h1>
        <Button
          title={lang}
          className="btn btn-purple"
          handelClick={handleClick}
        />
      </div>
    </header>
  );
};

export default Header;
