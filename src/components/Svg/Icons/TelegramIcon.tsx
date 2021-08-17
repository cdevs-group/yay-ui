import React from "react";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.75342 9.4124L6.46872 13.3997C6.87605 13.3997 7.05247 13.2255 7.26403 13.0163L9.17377 11.199L13.1309 14.0845C13.8567 14.4873 14.368 14.2752 14.5638 13.4197L17.1613 1.3006L17.162 1.29989C17.3922 0.231647 16.774 -0.186082 16.0669 0.0759806L0.79902 5.89634C-0.242982 6.29907 -0.227205 6.87746 0.621887 7.13952L4.52527 8.34844L13.5921 2.69946C14.0188 2.41812 14.4067 2.57378 14.0876 2.85513L6.75342 9.4124Z"
        fill="#F9F8F8"
      />
    </svg>
  );
};

export default Icon;
