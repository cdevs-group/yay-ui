import { useEffect, useState } from "react";
import SupportWindow from "./SupportWindow";
import { IStateInput, IStateInputError } from "./types";
import styled from "styled-components";
import { Text } from "../../components/Text";

export default {
  title: "Widgets/Support",
  argTypes: {},
};

export const SupportBlock = () => {
  const product = ["Bridge", "Igo", "Doodle", "Pinball"];
  const networks = ["AVAX", "BSC"];
  const [openModal, setOpenModal] = useState(false);
  const [fileUpload, setFileUpload] = useState(false);
  const [inputError, setInputError] = useState<IStateInputError>({
    email: "",
    address: "",
    txHash: "",
    problem: "",
    name: "",
    file: "",
  });
  const [inputsState, setInputsState] = useState<IStateInput>({
    email: "",
    address: "",
    txHash: "",
    problem: "",
    name: "",
    product: product[0],
    file: null,
  });

  useEffect(() => {
    if (inputsState.file === null) {
      setFileUpload(false);
    } else {
      setFileUpload(true);
    }
  }, [inputsState.file]);

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInputsState({
      ...inputsState,
      [name]: value,
    });
  };

  const handleSend = async () => {
    setOpenModal(true);
  };

  const handleInputFile = (e: any) => {
    const { name, files } = e.target;
    setInputsState({
      ...inputsState,
      [name]: files[0],
    });
  };

  const texts = {
    product: "Product",
    issue: "Issue severity",
    problem: "Describe your problem",
    email: "Your e-mail",
    address: "Your wallet address",
    txHash: "Transaction hash(Optional)",
    button: "Send a request",
    problemPlaceholder: "Describe your a problem",
    emailPlaceholder: "Enter your e-mail",
    addressPlaceholder: "Enter your wallet address",
    txHashPlaceholder: "Enter transaction hash",
    title: "Tech support",
    note: "Please understand that we can only assist with issues directly related to YAY Games services. ",
    name: "Name",
    modalTitle: "Success",
    modalText: "This page can`t be displayed right now due to an error. Please check back soon.",
    modalButton: "Go to marketplace",
    file: "Upload screenshots",
    filePlaceholder: fileUpload ? "File has been uploaded" : "Browse to upload",
    namePlaceholder: "Enter your name",
  };

  const points = [
    <TextStyle>
      <span>Before</span> writing in, please be informed that YAY Games:{" "}
    </TextStyle>,
    <TextStyle>
      <span>- Is not</span> responsible for blockchain issues like transaction stuck or EVM errors
    </TextStyle>,
    <TextStyle>
      <span> - Is not</span> responsible to 3rd party services stability
    </TextStyle>,
    <TextStyle>
      <span>- Can not</span> revert your assets accidentally sent to wrong address
    </TextStyle>,
    <TextStyle>
      <span>- Can not</span> help you with forgotten passphrase or private key
    </TextStyle>,
  ];

  return (
    <SupportWindow
      handleInputFile={handleInputFile}
      state={inputsState}
      handleInput={handleInput}
      product={product}
      texts={texts}
      inputError={inputError}
      handleButton={handleSend}
      buttonLoading={{ spin: true, disabled: true }}
      points={points}
      href="/"
      modalOpen={openModal}
      noteSuccess={
        <TextStyle>
          Join
          <span>more than 80 talented</span> people around the world. Our opportunities are all{" "}
          <span> 100% remote.</span>
        </TextStyle>
      }
      titleSuccess="We're hiring!"
    />
  );
};

const TextStyle = styled(Text)`
  font-size: 13px;
  line-height: 16px;
  text-align: center;
  letter-spacing: 0.17em;
  color: ${({ theme }) => theme.colors.text};

  & span {
    color: ${({ theme }) => theme.colors.green};
  }
`;
