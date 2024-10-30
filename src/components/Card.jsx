import React, { forwardRef } from "react";
import CardTitle from "./ui/CardTitle";

const Card = forwardRef(
  ({ className = "", title, titleAlign, text, children, titleHref, id }, ref) => {
    return (
      <div
        ref={ref}
        className={`${className} card flex-grow-1 border-0 shadow`}
        id={id}
      >
        <div className="card-body">
          {title && <CardTitle title={title} titleAlign={titleAlign} titleHref={titleHref} />}
          {text && <p className="card-text">{text}</p>}

          {children}
        </div>
      </div>
    );
  }
);

export default Card;
