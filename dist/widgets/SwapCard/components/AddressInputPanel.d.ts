/// <reference types="react" />
export interface AddressInputPanelProps {
    id?: string;
    value: string;
    onChange: (value: string) => void;
    linkText: string;
    recipientText: string;
    inputPlaceholderText: string;
    ENS: {
        address: string;
        loading: boolean;
        name: string;
    };
    chainId: any;
    bscScanLink: string;
}
export default function AddressInputPanel({ id, value, onChange, linkText, recipientText, inputPlaceholderText, ENS, chainId, bscScanLink, }: AddressInputPanelProps): JSX.Element;
