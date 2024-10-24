import React from "react";

const Pagination = ({ currentPage, totalPages, onPageChange }) => (
  <div className="d-flex justify-content-between align-items-center p-3 border-top">
    <span className="text-muted small">
      Page {currentPage} of {totalPages}
    </span>
    <div className="btn-group">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="btn btn-outline-secondary btn-sm"
      >
        Previous
      </button>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="btn btn-outline-secondary btn-sm"
      >
        Next
      </button>
    </div>
  </div>
);

export default Pagination;
