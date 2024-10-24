import React from "react";
import { Trash, Archive, Download } from "lucide-react";

const BulkActions = ({ selectedCount, onDelete, onArchive, onExport }) => (
  <div className="bg-light p-2 rounded mb-3">
    <div className="d-flex align-items-center gap-3">
      <span className="text-muted small">{selectedCount} items selected</span>
      <button onClick={onDelete} className="btn btn-outline-danger btn-sm">
        <Trash size={14} className="me-1" /> Delete
      </button>
      <button onClick={onArchive} className="btn btn-outline-secondary btn-sm">
        <Archive size={14} className="me-1" /> Archive
      </button>
      <button onClick={onExport} className="btn btn-outline-primary btn-sm">
        <Download size={14} className="me-1" /> Export
      </button>
    </div>
  </div>
);

export default BulkActions;
