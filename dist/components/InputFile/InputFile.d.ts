import React from "react";
import { SpaceProps } from "styled-system";
interface IProps extends SpaceProps {
    handleInputChange: (e?: any) => void;
    loading?: boolean;
    success?: boolean;
    error?: boolean;
}
declare const InputFile: React.FC<IProps>;
export default InputFile;
