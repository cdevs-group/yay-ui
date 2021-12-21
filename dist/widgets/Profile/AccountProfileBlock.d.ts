import React from "react";
import { LayoutProps, SpaceProps } from "styled-system";
interface IProps extends LayoutProps, SpaceProps {
    token?: string;
    account: string;
    linkAccount?: string;
    texts: {
        title: string;
    };
}
declare const AccountProfileBlock: React.FC<IProps>;
export default AccountProfileBlock;
