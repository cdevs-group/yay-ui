import React from "react";
import { Text } from "../../../../components/Text";

interface BondlyWarningProps {
  bondlyWarningText: string;
}

const BondlyWarning = ({ bondlyWarningText }: BondlyWarningProps) => {
  return <Text>{bondlyWarningText}</Text>;
};

export default BondlyWarning;
