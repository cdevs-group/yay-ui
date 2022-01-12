import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg width="42" height="42" viewBox="0 0 42 42" {...props}>
      <rect x="6" y="6" width="30" height="30" rx="7" fill="white" fillOpacity="0.15" />
      <g filter="url(#filter0_d_6638_9730)">
        <path
          d="M18 15V24C18 24.3978 18.158 24.7794 18.4393 25.0607C18.7206 25.342 19.1022 25.5 19.5 25.5H25.5C25.8978 25.5 26.2794 25.342 26.5607 25.0607C26.842 24.7794 27 24.3978 27 24V17.4315C27 17.2317 26.96 17.0339 26.8825 16.8497C26.805 16.6655 26.6914 16.4987 26.5485 16.359L24.0623 13.9275C23.782 13.6535 23.4057 13.5 23.0138 13.5H19.5C19.1022 13.5 18.7206 13.658 18.4393 13.9393C18.158 14.2206 18 14.6022 18 15V15Z"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        <path
          d="M24 25.5V27C24 27.3978 23.842 27.7794 23.5607 28.0607C23.2794 28.342 22.8978 28.5 22.5 28.5H16.5C16.1022 28.5 15.7206 28.342 15.4393 28.0607C15.158 27.7794 15 27.3978 15 27V18.75C15 18.3522 15.158 17.9706 15.4393 17.6893C15.7206 17.408 16.1022 17.25 16.5 17.25H18"
          stroke="white"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_6638_9730"
          x="8"
          y="10"
          width="26"
          height="26"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          <feGaussianBlur stdDeviation="2" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_6638_9730" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_6638_9730" result="shape" />
        </filter>
      </defs>
    </Svg>
  );
};

export default Icon;
