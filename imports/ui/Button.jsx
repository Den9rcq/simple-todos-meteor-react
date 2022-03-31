import React from 'react';

const Button = ({ className, title, handelClick }) => {
  return (
    <button className={className} onClick={handelClick}>
      {title}
    </button>
  );
};

export default Button;