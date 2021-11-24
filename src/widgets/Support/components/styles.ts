import styled from "styled-components";
import { Text } from "../../../components/Text";

export const Wrapper = styled.div<{ margin?: string }>`
  margin: ${({ margin }) => margin || 0};
`;
export const TitleStyle = styled(Text)`
  margin-bottom: 10px;
  text-align: left;
  font-weight: normal;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.05em;
`;
export const InputWrapper = styled.div`
  width: 100%;
  padding: 15px 30px;
  background: rgba(0, 0, 0, 0.25);
  border-radius: 12px;
  font-size: 15px;
  line-height: 15px;
  letter-spacing: 0.5px;
  text-shadow: 0px 3px 4px rgba(0, 0, 0, 0.15);
  color: ${({ theme }) => theme.colors.text};
  cursor: pointer;
`;
