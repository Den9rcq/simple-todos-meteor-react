import React from "react";
import Button from "./Button";

const Filter = ({ hideCompleted, handelClick }) => {
  return (
    <div className="self-center">
      <Button
        className="btn btn-red self-auto"
        title={hideCompleted ? "Show All" : "Hide Completed"}
        handelClick={handelClick}/>
    </div>
  );
};

export default Filter;
