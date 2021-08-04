import React from "react";
import styled from "styled-components";
import { PaginationProps } from "./types";
import ARROWSINGL from "../Svg/Icons/arrow-singl.svg";
import ARROWDOUBLE from "../Svg/Icons/arrow-double.svg";

const Pagination: React.FC<PaginationProps> = ({ length, currentPage, togglePage }) => {

  const paginationRender = () => {
    const pagination = [];
    if (length && currentPage)
      if (length < 4) {
        for (let i = 1; i < length + 1; i++) {
          pagination.push(i);
        }
      } else {
        for (let i = 1; i < length + 1; i++) {
          if (currentPage === i + 1 || currentPage === i - 1 || currentPage === i) {
            pagination.push(i);
          }
          if (i < currentPage - 1 && !pagination.includes("start") && !pagination.includes("prev")) {
            pagination.push("start");
            pagination.push("prev");
          }
          if (i > currentPage + 1 && !pagination.includes("next") && !pagination.includes("finish")) {
            pagination.push("next");
            pagination.push("finish");
          }
        }
      }
    return pagination;
  };

  const itemValue = (item: string | number) => {
    if (item && currentPage)
      switch (item) {
        case "next":
          return currentPage + 1;
        case "prev":
          return currentPage - 1;
        case "finish":
          return length;
        case "start":
          return 1;
        default:
          return item;
      }
  };

  const itemRender = (item: string | number) => {
    switch (item) {
      case "next":
        return <img className="reverse" src={ARROWSINGL} />;
      case "prev":
        return <img src={ARROWSINGL} />;
      case "finish":
        return <img className="reverse" src={ARROWDOUBLE} />;
      case "start":
        return <img src={ARROWDOUBLE} />;
      default:
        return item;
    }
  };

  return (
    <PaginationWrap>
      {length && currentPage && length > 1
        ? paginationRender().map((item, i) => (
            <PageButton
              onClick={togglePage}
              key={i}
              value={itemValue(item)}
              className={currentPage === item ? "active" : ""}
            >
              {/* {item} */}
              {itemRender(item)}
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
  margin: 0 auto;
  ${({ theme }) => theme.mediaQueries.md} {
    margin: 0;
  }
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
  & img {
    pointer-events: none;
    &.reverse {
      transform: rotateY(180deg);
    }
  }
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
