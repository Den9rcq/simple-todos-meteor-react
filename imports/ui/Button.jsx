import React from "react";

const Button = ({ className, title, type, handelClick }) => {
  return (
    <button
      className={className}
      type={type}
      onClick={handelClick}>
      {title}
    </button>
  );
};

export default Button;
