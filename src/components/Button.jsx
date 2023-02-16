import React, { Fragment } from "react";

const Button = ({ onClick, title }) => {
  return (
    <Fragment>
      <button
        onClick={onClick}
        className="inline-flex items-center justify-center px-4 py-2 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[30px]"
      >
        {title}
      </button>
    </Fragment>
  );
};

export default Button;
