import React, { useState, useMemo } from "react";
import { SortDesc } from "lucide-react";

import BulkActions from "./BulkActions";
import DateRangeFilter from "./DateRangeFilter";
import FilterInput from "./FilterInput";
import Pagination from "./Pagination";
import TableRow from "./TableRow";
import sampleReceipts from "../../data/samples/sampleReceipts";

const ITEMS_PER_PAGE = 10;

const ReceiptTable = () => {
  const [selectedReceipts, setSelectedReceipts] = useState(new Set());
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({
    key: "postedDate",
    direction: "desc",
  });
  const [filters, setFilters] = useState({
    property: "",
    merchant: "",
    description: "",
    startDate: "",
    endDate: "",
  });

  // Filter and sort logic
  const filteredReceipts = useMemo(() => {
    return sampleReceipts
      .filter((receipt) => {
        const matchesProperty = receipt.property
          .toLowerCase()
          .includes(filters.property.toLowerCase());
        const matchesMerchant = receipt.merchant
          .toLowerCase()
          .includes(filters.merchant.toLowerCase());
        const matchesDescription = receipt.description
          .toLowerCase()
          .includes(filters.description.toLowerCase());

        let matchesDate = true;
        if (filters.startDate && filters.endDate) {
          const receiptDate = new Date(receipt.postedDate);
          const startDate = new Date(filters.startDate);
          const endDate = new Date(filters.endDate);
          matchesDate = receiptDate >= startDate && receiptDate <= endDate;
        }

        return (
          matchesProperty &&
          matchesMerchant &&
          matchesDescription &&
          matchesDate
        );
      })
      .sort((a, b) => {
        const direction = sortConfig.direction === "asc" ? 1 : -1;
        if (sortConfig.key === "amount") {
          return (a[sortConfig.key] - b[sortConfig.key]) * direction;
        }
        return (
          String(a[sortConfig.key]).localeCompare(String(b[sortConfig.key])) *
          direction
        );
      });
  }, [sampleReceipts, filters, sortConfig]);

  // Pagination
  const totalPages = Math.ceil(filteredReceipts.length / ITEMS_PER_PAGE);
  const paginatedReceipts = filteredReceipts.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handleSort = (key) => {
    setSortConfig({
      key,
      direction:
        sortConfig.key === key && sortConfig.direction === "asc"
          ? "desc"
          : "asc",
    });
  };

  const handleCheckboxChange = (id) => {
    const newSelected = new Set(selectedReceipts);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedReceipts(newSelected);
  };

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      setSelectedReceipts(new Set(paginatedReceipts.map((r) => r.id)));
    } else {
      setSelectedReceipts(new Set());
    }
  };

  const handleBulkDelete = () => {
    console.log("Deleting:", Array.from(selectedReceipts));
  };

  const handleBulkArchive = () => {
    console.log("Archiving:", Array.from(selectedReceipts));
  };

  const handleBulkExport = () => {
    console.log("Exporting:", Array.from(selectedReceipts));
  };

  return (
    <div className="container-fluid">
      {/* Filters */}
      <div className="row g-3 mb-3">
        <div className="col-md-3">
          <FilterInput
            placeholder="Filter by property"
            value={filters.property}
            onChange={(value) => setFilters({ ...filters, property: value })}
          />
        </div>
        <div className="col-md-3">
          <FilterInput
            placeholder="Filter by merchant"
            value={filters.merchant}
            onChange={(value) => setFilters({ ...filters, merchant: value })}
          />
        </div>
        <div className="col-md-3">
          <FilterInput
            placeholder="Filter by description"
            value={filters.description}
            onChange={(value) => setFilters({ ...filters, description: value })}
          />
        </div>
        <div className="col-md-3">
          <DateRangeFilter
            startDate={filters.startDate}
            endDate={filters.endDate}
            onStartDateChange={(value) =>
              setFilters({ ...filters, startDate: value })
            }
            onEndDateChange={(value) =>
              setFilters({ ...filters, endDate: value })
            }
          />
        </div>
      </div>

      {/* Bulk Actions */}
      {selectedReceipts.size > 0 && (
        <BulkActions
          selectedCount={selectedReceipts.size}
          onDelete={handleBulkDelete}
          onArchive={handleBulkArchive}
          onExport={handleBulkExport}
        />
      )}

      {/* Table */}
      <div className="card">
        <div className="table-responsive">
          <table className="table table-hover mb-0">
            <thead className="table-light">
              <tr>
                <th>
                  <input
                    type="checkbox"
                    onChange={handleSelectAll}
                    checked={selectedReceipts.size === paginatedReceipts.length}
                    className="form-check-input"
                  />
                </th>
                <th>
                  <button
                    onClick={() => handleSort("property")}
                    className="btn btn-link text-dark p-0 text-decoration-none"
                  >
                    Property <SortDesc size={14} />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleSort("postedDate")}
                    className="btn btn-link text-dark p-0 text-decoration-none"
                  >
                    Posted <SortDesc size={14} />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleSort("merchant")}
                    className="btn btn-link text-dark p-0 text-decoration-none"
                  >
                    Merchant <SortDesc size={14} />
                  </button>
                </th>
                <th>
                  <button
                    onClick={() => handleSort("description")}
                    className="btn btn-link text-dark p-0 text-decoration-none"
                  >
                    Description <SortDesc size={14} />
                  </button>
                </th>
                <th className="text-end">
                  <button
                    onClick={() => handleSort("amount")}
                    className="btn btn-link text-dark p-0 text-decoration-none"
                  >
                    Amount <SortDesc size={14} />
                  </button>
                </th>
              </tr>
            </thead>
            <tbody>
              {paginatedReceipts.map((receipt) => (
                <TableRow
                  key={receipt.id}
                  receipt={receipt}
                  onCheckboxChange={handleCheckboxChange}
                  isSelected={selectedReceipts.has(receipt.id)}
                />
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default ReceiptTable;
