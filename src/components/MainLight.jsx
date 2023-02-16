import React, { Fragment } from "react";

const MainLight = () => {
  return (
    <Fragment>
      <div className={`traffic-light ${currentColor}`} />
    </Fragment>
  );
};

export default MainLight;
