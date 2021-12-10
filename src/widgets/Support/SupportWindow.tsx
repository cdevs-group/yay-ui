import React, { ReactNode } from "react";
import styled from "styled-components";
import Select from "./components/Select";
import Input from "./components/Input";
import { Button } from "../../components/Button";
import { IStateInput, IStateInputError, ITexts } from "./types";
import TitlePage from "./components/TitlePage";
import NoticeModal from "./components/NoticeModal";
import InputFile from "./components/InputFile";

const SupportWindow = ({
  texts,
  state,
  handleInput,
  product,
  handleButton,
  points,
  inputError,
  modalOpen,
  href,
  noteSuccess,
  titleSuccess,
  handleInputFile,
}: {
  points: ReactNode[];
  handleButton: () => void | Promise<void>;
  texts: ITexts;
  product: string[];
  state: IStateInput;
  handleInput: (e: any) => void;
  inputError?: IStateInputError;
  modalOpen: boolean;
  href: string;
  noteSuccess: ReactNode;
  titleSuccess: string;
  handleInputFile: (e: any) => void;
}) => {
  return (
    <div style={{ maxWidth: "520px", margin: "0 auto" }}>
      {!modalOpen ? (
        <>
          {" "}
          <TitlePage points={points} title={texts.title} note={texts.note} />
          <StyledSupport>
            <Input
              title={texts.name}
              margin="0 0 25px"
              placeholder={texts.namePlaceholder}
              onChange={handleInput}
              name="name"
              value={state["name"]}
              inputError={inputError?.name}
            />
            <Select
              margin="0 0 21px"
              handleSelect={handleInput}
              optionsList={product}
              selectTarget={state["product"]}
              title={texts.product}
              name="product"
            />
            <Input
              title={texts.problem}
              margin="0 0 25px"
              placeholder={texts.problemPlaceholder}
              onChange={handleInput}
              name="problem"
              textArea
              value={state["problem"]}
              inputError={inputError?.problem}
            />
            <Input
              title={texts.email}
              margin="0 0 25px"
              placeholder={texts.emailPlaceholder}
              onChange={handleInput}
              name="email"
              value={state["email"]}
              inputError={inputError?.email}
            />
            <Input
              title={texts.address}
              margin="0 0 25px"
              placeholder={texts.addressPlaceholder}
              onChange={handleInput}
              name="address"
              value={state["address"]}
              inputError={inputError?.address}
            />
            <Input
              title={texts.txHash}
              margin="0 0 45px"
              placeholder={texts.txHashPlaceholder}
              onChange={handleInput}
              name="txHash"
              value={state["txHash"]}
              inputError={inputError?.txHash}
            />
            <InputFile
              onChange={handleInputFile}
              name="file"
              placeholder={texts.filePlaceholder}
              margin="0 0 45px"
              title={texts.file}
            />
            <Button onClick={handleButton} width="100%" variant="green">
              {texts.button}
            </Button>
          </StyledSupport>
        </>
      ) : (
        <>
          <TitlePage title={titleSuccess} note={noteSuccess} />
          <NoticeModal href={href} text={texts.modalText} button={texts.modalButton} title={texts.modalTitle} />
        </>
      )}
    </div>
  );
};

export default SupportWindow;

export const StyledSupport = styled.div`
  padding: 20px 10px 30px;
  margin: 0 auto;
  max-width: 404px;
  max-height: 100vh;
  min-width: 303px;
  width: 100%;
  background: ${({ theme }) => theme.colors.bgGray};
  box-shadow: 0px 20px 36px -8px rgba(14, 14, 44, 0.1), 0px 1px 1px rgba(0, 0, 0, 0.05);
  border-radius: 15px;
  z-index: ${({ theme }) => theme.zIndices.modal};
  overflow-y: auto;

  ${({ theme }) => theme.mediaQueries.xs} {
    min-width: 360px;
    width: 100%;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: 45px 30px 30px;
    min-width: 449px;
    width: 100%;
  }
`;
