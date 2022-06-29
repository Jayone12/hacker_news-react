import { useState } from "react";
import useHomeDataFetch from "../hooks/useHomeDataFetch";

const Pagination = ({ page, setPage }) => {
  const handlePrev = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };

  const handleNext = () => {
    if (page < 9) {
      setPage(page + 1);
    }
  };
  return (
    <div>
      <button onClick={handlePrev}>&lt;</button>
      {page}/9
      <button onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default Pagination;
