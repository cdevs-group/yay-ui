import React from "react";
import { useModal } from "../Modal";
import BridgeProof from "./BridgeProof";
import { Metamask } from "../../constants/images";

interface ReturnType {
  onPresentBridgeModal: () => void;
}

const ProofOfAssetsData = [
  {
    proofData: {
      token: "3,836.537598 YAY",
      address: "0xbdda50183d817c3289f895a4472eb475967dc980",
      network: "bscan.ru",
      textCopy: "Copied",
      title: "Proof of Asset",
    },
    wrappedData: [
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
        title: "Wrapped Token",
      },
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
        title: "Supply token",
      },
    ],
  },
  {
    proofData: {
      token: "3,836.537598 YAY",
      address: "0xbdda50183d817c3289f895a4472eb475967dc980",
      network: "bscan.ru",
      textCopy: "Copied",
      title: "Proof of Asset",
    },
    wrappedData: [
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
        title: "Wrapped Token",
      },
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
        title: "Supply token",
      },
    ],
  },
  {
    proofData: {
      token: "3,836.537598 YAY",
      address: "0xbdda50183d817c3289f895a4472eb475967dc980",
      network: "bscan.ru",
      textCopy: "Copied",
      title: "Proof of Asset",
    },
    wrappedData: [
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
        title: "Wrapped Token",
      },
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
        title: "Supply token",
      },
    ],
  },
];
const texts = {
  title: "Proof of Assets",
  description: "You can view all on-chain behaviors of AVAX token and locked native token assets on this page",
};

const useBridgeModal = (): ReturnType => {
  const [onPresentBridgeModal] = useModal(
    <BridgeProof
      addTokenHandler={() => {}}
      BSCSkanHandler={() => {}}
      onDismiss={() => {}}
      texts={texts}
      ProofOfAssetsData={ProofOfAssetsData}
      addTokenIcon={<img src={Metamask} />}
    />
  );
  return { onPresentBridgeModal };
};

export default useBridgeModal;
