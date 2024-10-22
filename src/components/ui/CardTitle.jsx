import React from "react";

const CardTitle = ({ titleAlign, title }) => {
  return <h5 className={`card-title text-${titleAlign}`}>{title}</h5>;
};

export default CardTitle;