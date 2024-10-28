import React, { createContext, useState } from "react";

export const PageContext = createContext();

export const PageProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState("overview"); // Set initial page if you want
  const [formType, setFormType] = useState(null);

  return (
    <PageContext.Provider
      value={{ currentPage, setCurrentPage, formType, setFormType }}
    >
      {children}
    </PageContext.Provider>
  );
};
