import { useState } from "react";

const usePagination = (initPage, limitNum) => {
  const limit = limitNum;
  const [page, setPage] = useState(initPage);
  const offset = (page - 1) * limit;

  return { limit, page, setPage, offset };
};

export default usePagination;
