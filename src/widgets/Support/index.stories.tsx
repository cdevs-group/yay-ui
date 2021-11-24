import { useState } from "react";
import SupportWindow from "./SupportWindow";
import { IStateInput } from "./types";
import styled from "styled-components";
import { Text } from "../../components/Text";

export default {
  title: "Widgets/Support",
  argTypes: {},
};

export const SupportBlock = () => {
  const product = ["Bridge", "Igo", "Doodle", "Pinball"];
  const issue = ["Bridge1", "Igo1", "Doodle1", "Pinball1"];
  const [inputsState, setInputsState] = useState<IStateInput>({
    email: "",
    address: "",
    txHash: "",
    problem: "",
    product: product[0],
  });

  const handleInput = (e: any) => {
    const { name, value } = e.target;
    setInputsState({
      ...inputsState,
      [name]: value,
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
      state={inputsState}
      handleInput={handleInput}
      product={product}
      issues={issue}
      texts={texts}
      handleButton={() => console.log("click")}
      points={points}
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
