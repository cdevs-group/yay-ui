import React from "react";
import styled from "styled-components";
import { Text } from "../../../../components/Text";
import { Flex } from "../../../../components/Box";
import { Heading } from "../../../../components/Heading";
import { IconButton } from "../../../../components/Button";
import { ArrowBackIcon } from "../../../../components/Svg";
import { NotificationDot } from "../../../../components/NotificationDot";
import { Link } from "react-router-dom";
import QuestionHelper from "../../../../components/QuestionHelper";
import { AppHeaderProps } from "./types";

const AppHeaderContainer = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  padding: 24px;
  width: 100%;
`;
const Subtitle = styled(Text)`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.text};
`;

const AppHeader: React.FC<AppHeaderProps> = ({
  title,
  subtitle,
  helper,
  backTo,
  noConfig = false,
  expertMode,
  transactions,
  globalSettings,
}) => {
  return (
    <AppHeaderContainer>
      <Flex alignItems="center" mr={noConfig ? 0 : "16px"}>
        {backTo && (
          <IconButton as={Link} to={backTo}>
            <ArrowBackIcon width="32px" />
          </IconButton>
        )}
        <Flex flexDirection="column">
          <Heading as="h2" mb="8px">
            {title}
          </Heading>
          <Flex alignItems="center">
            {helper && <QuestionHelper text={helper} mr="4px" placement="top-start" />}
            <Subtitle>{subtitle}</Subtitle>
          </Flex>
        </Flex>
      </Flex>
      {!noConfig && (
        <Flex alignItems="center">
          <NotificationDot show={expertMode}>{globalSettings}</NotificationDot>
          {transactions}
        </Flex>
      )}
    </AppHeaderContainer>
  );
};

export default AppHeader;
