import React, { ChangeEvent } from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import Text from "../../components/Text/Text";
import { CheckboxInput } from "../../components/CheckboxInput";
import { Button } from "../../components/Button";
import { InputSearch } from "../../components/InputSearch";

interface PropsGiftModal {
  onDismiss?: () => void;
  title: string;
  textCheckbox: string;
  continueText: string;
  description: string;
  handleConfirm?: () => void;
  disabledButton?: boolean;
  handleChangeCheckbox?: () => void;
  checkedCheckbox?: boolean;
  labelInput1: string;
  labelInput2: string;
  placeholderInput1: string;
  placeholderInput2: string;
  onChangeInput1?: (e: ChangeEvent<HTMLInputElement>) => void;
  onChangeInput2?: (e: ChangeEvent<HTMLInputElement>) => void;
  valueInput1?: string | number;
  valueInput2?: string | number;
  linkText: string;
}

const Wrap = styled.div`
  padding: 15px 20px 26px;
`;
const FormWrap = styled.div`
  margin: 0 auto 30px;
  max-width: 270px;
`;
const Beta = styled(Text)`
  display: flex;
  justify-content: center;
  letter-spacing: 0.05em;
  text-align: center;
`;

const CheckboxInputBlock = styled.div`
  cursor: pointer;
  display: grid;
  grid-template-columns: 1fr 9fr;
  margin-top: 33px;
`;

const Label = styled.label`
  margin-left: 22px;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  letter-spacing: 0.05em;
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;

const InputBlock = styled.div`
  margin-top: 23px;
  &:last-child {
    margin-top: 17px;
  }
`;

const LabelInput = styled(Text)`
  margin-bottom: 12px;
`;

const Link = styled(Text)`
  display: block;
  margin-top: 15px;
  text-align: center;
  text-decoration: underline;
`;

const GiftModal: React.FC<PropsGiftModal> = ({
  onDismiss = () => null,
  title,
  textCheckbox,
  continueText,
  description,
  handleConfirm,
  disabledButton,
  handleChangeCheckbox,
  checkedCheckbox,
  labelInput1,
  labelInput2,
  placeholderInput1,
  placeholderInput2,
  onChangeInput1,
  onChangeInput2,
  valueInput1,
  valueInput2,
  linkText,
}) => (
  <>
    <Modal title={title} onDismiss={onDismiss} welcome>
      <Wrap>
        <FormWrap>
          <Beta>{description}</Beta>
          <InputBlock>
            <LabelInput size="md">{labelInput1}</LabelInput>
            <InputSearch
              placeholder={placeholderInput1}
              width="100%"
              height="50px"
              iconLess
              onChange={onChangeInput1}
              value={valueInput1}
            />
          </InputBlock>
          <InputBlock>
            <LabelInput size="md">{labelInput2}</LabelInput>
            <InputSearch
              placeholder={placeholderInput2}
              width="100%"
              height="50px"
              iconLess
              onChange={onChangeInput2}
              value={valueInput2}
            />
          </InputBlock>
          <Link size="sm" as="a">
            {linkText}
          </Link>
          <CheckboxInputBlock className="bottom">
            <CheckboxInput id="bottom" onChange={handleChangeCheckbox} checked={checkedCheckbox} />
            <Label htmlFor="bottom">{textCheckbox}</Label>
          </CheckboxInputBlock>
        </FormWrap>
        <Button width="100%" variant="green" onClick={handleConfirm} disabled={disabledButton}>
          {continueText}
        </Button>
      </Wrap>
    </Modal>
  </>
);

export default GiftModal;
