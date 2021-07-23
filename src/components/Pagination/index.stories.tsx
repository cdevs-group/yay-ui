import React, { useState } from "react";
import Pagination from "./Pagination";

export default {
  title: "Components/Pagination",
};

export const PaginationBlock: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [currentPage2, setCurrentPage2] = useState<number>(1);
  const [currentPage3, setCurrentPage3] = useState<number>(1);

  const togglePage = async (e: any) => {
    setCurrentPage(+e.target.value);
  };

  const togglePage2 = async (e: any) => {
    setCurrentPage2(+e.target.value);
  };

  const togglePage3 = async (e: any) => {
    setCurrentPage3(+e.target.value);
  };

  return (
    <div>
      <div style={{ marginTop: "30px" }}>
        <Pagination length={2} currentPage={currentPage} togglePage={togglePage} />
      </div>
      <div style={{ marginTop: "30px" }}>
        <Pagination length={25} currentPage={currentPage2} togglePage={togglePage2} />
      </div>
      <div style={{ marginTop: "30px" }}>
        <Pagination length={10} currentPage={currentPage3} togglePage={togglePage3} />
      </div>
    </div>
  );
};
