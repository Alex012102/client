import React from "react";

const CardTitle = ({ titleAlign, title, titleHref }) => {
  return (
    <div className="d-flex align-items-center justify-content-between">
      <h5 className={`card-title text-${titleAlign}`}>{title}</h5>
      {titleHref && (
        <a href={titleHref} className="text-link fs-7 text-info">
          View All
        </a>
      )}
    </div>
  );
};

export default CardTitle;
