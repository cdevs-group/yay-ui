import React from "react";
import { Button } from "../../../../components/Button";
import { Text } from "../../../../components/Text";
import { LinkExternal } from "../../../../components/Link";

function ManageListTooltip({
  tooltipLabel,
  hrefLink,
  handleRemoveList,
  handleAcceptListUpdate,
  disabledButtonRemove,
  texts,
  pending,
}: {
  tooltipLabel: any;
  hrefLink: string;
  handleRemoveList: () => void;
  handleAcceptListUpdate: () => void;
  disabledButtonRemove: boolean;
  pending: any;
  texts: {
    see: string;
    remove: string;
    updateList: string;
  };
}) {
  return (
    <div>
      <Text>{tooltipLabel}</Text>
      <LinkExternal external href={hrefLink}>
        {texts.see}
      </LinkExternal>
      <Button variant="option" scale="xs" onClick={handleRemoveList} disabled={disabledButtonRemove}>
        {texts.remove}
      </Button>
      {pending && (
        <Button variant="text" onClick={handleAcceptListUpdate} style={{ fontSize: "12px" }}>
          {texts.updateList}
        </Button>
      )}
    </div>
  );
}

export default ManageListTooltip;
