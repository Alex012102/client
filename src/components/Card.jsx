import React from "react";
import CardTitle from "./ui/CardTitle";

const Card = ({ style, title, titleAlign, text, children }) => {
  return (
    <div className={`${style} card shadow border-0`}>
      <div className="card-body">
        {title && <CardTitle title={title} titleAlign={titleAlign} />}
        {text && <p className="card-text">{text}</p>}
        {children && { children }}
      </div>
    </div>
  );
};

export default Card;
