import React from "react";
import {  IconButton } from "../../../../components/Button";
import { RowBetween, RowFixed } from "../../../../components/Layouts/Row";
import { Link, LinkExternal } from "../../../../components/Link";
import { CloseIcon3 } from "../../../../components/Svg";

export default function ManageTokenList({
  currencyLogo,
  linkHref,
  chainId,
  removeToken,
  token,
}: {
  currencyLogo: React.ReactNode;
  linkHref: string;
  token: any;
  chainId: number;
  removeToken: (chainId: number, address: string) => void;
}) {
  return (
    <RowBetween key={token.address} width="100%" marginTop="20px">
      <RowFixed>
        {currencyLogo}
        <Link external href={linkHref} color="text" ml="10px">
          {token.symbol}
        </Link>
      </RowFixed>
      <RowFixed>
        <IconButton variant="text" onClick={() => removeToken(chainId, token.address)}>
          <CloseIcon3 />
        </IconButton>
        <LinkExternal href={linkHref} />
      </RowFixed>
    </RowBetween>
  );
}
