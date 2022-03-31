import React from "react";
import Button from "./Button";

const Filter = ({ hideCompleted, handelClick }) => {
  return (
    <div className="filter">
      <Button
        title={hideCompleted ? "Show All" : "Hide Completed"}
        handelClick={handelClick}/>
    </div>
  );
};

export default Filter;
