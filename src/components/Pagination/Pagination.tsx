import React from "react";
import styled from "styled-components";
import { PaginationProps } from "./types";

const Pagination: React.FC<PaginationProps> = ({ length, currentPage, togglePage }) => {
  const paginationRender = () => {
    const pagination = [];
    if (length && currentPage && length < 6)
      for (let i = 1; i < length + 1; i++) {
        pagination.push(i);
      }
    if (length && currentPage && length > 5) {
      for (let i = 1; i < length + 1; i++) {
        if (i === 1 || i === length || i === currentPage + 1 || i === currentPage - 1 || i === currentPage) {
          pagination.push(i);
        } else if (i === currentPage + 2 || i === currentPage - 2) {
          pagination.push("...");
        }
      }
    }
    return pagination;
  };

  return (
    <PaginationWrap>
      {length && length > 1
        ? paginationRender().map((item, i) => (
            <PageButton
              disabled={item === "..."}
              onClick={togglePage}
              key={i}
              value={item}
              className={currentPage === item ? "active" : item === "..." ? "disabled" : ""}
            >
              {item}
            </PageButton>
          ))
        : null}
    </PaginationWrap>
  );
};

export default Pagination;

const PaginationWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PageButton = styled.button`
  margin-right: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  height: 30px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 7px;
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
  text-shadow: ${({ theme }) => theme.colors.textShadow};
  cursor: pointer;
  border: none;
  transition: 0.3s;
  &:last-child {
    margin-right: 0;
  }
  &.active {
    background: ${({ theme }) => theme.colors.greenGradient};
  }
  &.disabled {
    cursor: default;
  }
`;
