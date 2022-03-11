import React from "react";
import { Variant } from "../../components/Button/types";
import { LayoutProps, SpaceProps } from "styled-system";
interface Props {
    title: string;
    buttonText: string;
    descriptionTop: string | React.ReactNode;
    descriptionBottom?: string | React.ReactNode;
    handleConfirm?: () => void;
    disabledButton?: boolean;
    buttonVariant?: Variant;
    img?: string;
    marginImg?: string;
    hideCloseButton?: boolean;
    onDismiss?: () => void;
    loaderButton?: boolean;
    imgProps?: ImgProps;
}
interface ImgProps extends SpaceProps, LayoutProps {
}
declare const ErrorModal: React.FC<Props>;
export default ErrorModal;
