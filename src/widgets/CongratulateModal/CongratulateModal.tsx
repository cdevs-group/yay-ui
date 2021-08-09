import React from "react";
import styled from "styled-components";
import { Modal } from "../Modal";
import Text from "../../components/Text/Text";
import { Gift3 } from "../../constants/images";
import { Button } from "../../components/Button";

interface Props {
  title: string;
  buttonText: string;
  description: string | React.ReactNode;
  handleConfirm?: () => void;
  disabledButton?: boolean;
  errorPadding?: boolean;
  onDismiss?: () => void;
  hrefLink?: string;
}

const Wrap = styled.div`
  padding: 0 20px 26px;
`;

const GiftImg = styled.div`
  /* position: absolute;
  left: 50%;
  transform: translateX(-50%); */
  margin-top: -55px;
  top: 0;
  display: flex;
  justify-content: center;
`;

const Description = styled(Text)`
  display: flex;
  justify-content: center;
  padding: 16px 26px 30px;
  letter-spacing: 0.05em;
  text-align: center;
  font-weight: normal;
`;

const Title = styled(Text)`
  text-align: center;
  margin-top: 15px;
`;

const LinkBlock = styled.div`
  margin-top: 28px;
  text-align: center;
  margin: 28px auto 0;
`;
const Link = styled(Text)`
  cursor: pointer;
`;

const CongratulateModal: React.FC<Props> = ({
  title,
  buttonText,
  description,
  handleConfirm,
  disabledButton,
  onDismiss,
  hrefLink,
  ...props
}) => (
  <>
    <Modal welcome onDismiss={onDismiss} {...props}>
      <Wrap>
        <GiftImg>
          <img src={Gift3} />
        </GiftImg>
        <Title>{title}</Title>
        <Description size="sm">{description}</Description>
        <LinkBlock>
          <Link color="#47DA3B" onClick={onDismiss}>
            {buttonText}
          </Link>
        </LinkBlock>
        {/* <Button width="100%" variant="green" onClick={handleConfirm} disabled={disabledButton}>
          {buttonText}
        </Button> */}
      </Wrap>
    </Modal>
  </>
);

export default CongratulateModal;
