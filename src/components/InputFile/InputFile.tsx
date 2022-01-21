import React from "react";
import styled from "styled-components";
import { space, SpaceProps } from "styled-system";
import { UPLOAD_ICON } from "../..";
import { CercleIcon, CheckIcon2, CloseIcon } from "../Svg";

interface IProps extends SpaceProps {
  handleInputChange: (e?: any) => void;
  loading?: boolean;
  success?: boolean;
  error?: boolean;
}

const InputFile: React.FC<IProps> = ({ handleInputChange, loading, success, error, ...props }) => {
  return (
    <Wrapper loading={loading} success={success} error={error} {...props}>
      <Input name="file" type="file" onChange={handleInputChange} accept="image/*" />
      {!loading && !success && !error && <img src={UPLOAD_ICON} alt="" />}
      {loading && <CercleIcon spin fill="none" />}
      {success && <CheckIcon2 stroke="#fff" />}
      {error && <CloseIcon fill="none" />}
    </Wrapper>
  );
};

export default InputFile;

const Wrapper = styled.label<{ loading?: boolean; success?: boolean; error?: boolean }>`
  position: relative;
  display: block;
  width: 116px;
  height: 36px;
  background: ${({ theme }) => theme.colors.whiteRgba};
  border-radius: 12px;
  cursor: pointer;
  overflow: hidden;
  ${space}
  &:after {
    content: "";
    position: absolute;
    background: ${({ theme, error }) => (error ? theme.colors.redBg : theme.colors.green)};
    width: ${({ loading, success, error }) => (loading || success || error ? "100%" : 0)};
    height: 100%;
    transition: width 2s, background 0.3s;
  }
  & img,
  & svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
  }
`;
const Input = styled.input`
  display: none;
`;
