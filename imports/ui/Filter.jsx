import React from "react";
import Button from "./Button";
import { strings } from "../utils/localization";

const Filter = ({ hideCompleted, handelClick }) => {
  return (
    <div className="self-center">
      <Button
        className="btn btn-red self-auto"
        title={hideCompleted ? strings.btnShowTask : strings.btnHideTask}
        handelClick={handelClick}/>
    </div>
  );
};

export default Filter;
