import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import Text from "../../components/Text/Text";
import { CheckboxInput } from "../../components/CheckboxInput";
import { Button } from "../../components/Button";
import { InputSearch } from "../../components/InputSearch";

interface PropsGiftFormModal {
  onDismiss?: () => void;
  title: string;
  textCheckbox: string;
  continueText: string;
  description: string;
  handleConfirm?: () => void;
  disabledButton?: boolean;
  handleChangeCheckbox?: (e: any) => void;
  checkedCheckbox?: boolean;
  textError?: string;
  placeholderInput1: string;
  placeholderInput2: string;
  onChangeInput1?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInput2?: (e: ChangeEvent<HTMLInputElement>) => void;
  valueInput1?: string | number;
  valueInput2?: string | number;
  linkText: string;
  hrefLink: string;
  nameInput1?: string;
  nameInput2?: string;
  nameCheckbox?: string;
  image?: boolean;
}

const Wrap = styled.div`
  padding: 55px 20px 26px;
`;

const Title = styled(Text)`
  letter-spacing: 0.05em;
  text-align: center;
`;

const Beta = styled(Text)`
  padding: 0 30px;
  margin-top: 15px;
  margin-bottom: 10px;
  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  text-align: center;
  font-weight: 400;
`;

const CheckboxInputBlock = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 9fr;
  margin-top: 30px;
`;

const Label = styled.label`
  margin-left: 22px;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const InputBlock = styled.div`
  margin-top: 23px;
  &:last-child {
    margin-top: 17px;
  }
`;

// const LabelInput = styled(Text)`
//   margin-bottom: 12px;
// `;

const Link = styled(Text)`
  display: block;
  margin-top: 15px;
  text-align: center;
  font-weight: 400;
`;

const GiftFormModal: React.FC<PropsGiftFormModal> = ({
  onDismiss = () => null,
  title,
  textCheckbox,
  continueText,
  description,
  handleConfirm,
  disabledButton,
  handleChangeCheckbox,
  checkedCheckbox,
  placeholderInput1,
  placeholderInput2,
  onChangeInput1,
  onChangeInput2,
  valueInput1,
  valueInput2,
  linkText,
  hrefLink,
  nameInput1,
  nameInput2,
  nameCheckbox,
  image,
  textError,
}) => (
  <>
    <Modal image={image} onDismiss={onDismiss} welcome>
      <Wrap>
        <Title>{title}</Title>
        <Beta>{description}</Beta>
        <InputBlock>
          {/* <LabelInput size="md">{labelInput1}</LabelInput> */}
          <InputSearch
            placeholder={placeholderInput1}
            width="100%"
            height="50px"
            iconLess
            onChange={onChangeInput1}
            value={valueInput1}
            name={nameInput1 || "email"}
          />
        </InputBlock>
        <InputBlock>
          {/* <LabelInput size="md">{labelInput2}</LabelInput> */}
          <InputSearch
            placeholder={placeholderInput2}
            width="100%"
            height="50px"
            iconLess
            onChange={onChangeInput2}
            value={valueInput2}
            name={nameInput2 || "wallet"}
          />
        </InputBlock>
        <Link target="_blank" color="#47DA3B" size="sm" as="a" href={hrefLink}>
          {linkText}
        </Link>
        <CheckboxInputBlock className="bottom">
          <CheckboxInput
            id="bottom"
            onChange={handleChangeCheckbox}
            checked={checkedCheckbox}
            name={nameCheckbox || "check"}
          />
          <Label htmlFor="bottom">{textCheckbox}</Label>
        </CheckboxInputBlock>
        {textError ? (
          <Text marginTop={20} color="red">
            {textError}
          </Text>
        ) : null}
        <Button marginTop="30px" width="100%" variant="green" onClick={handleConfirm} disabled={disabledButton}>
          {continueText}
        </Button>
      </Wrap>
    </Modal>
  </>
);

export default GiftFormModal;
