import React from "react";
import { useModal } from "../Modal";
import BridgeProof from "./BridgeProof";

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
    },
    wrappedData: [
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
      },
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
      },
    ],
  },
  {
    proofData: {
      token: "3,836.537598 YAY",
      address: "0xbdda50183d817c3289f895a4472eb475967dc980",
      network: "bscan.ru",
      textCopy: "Copied",
    },
    wrappedData: [
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
      },
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
      },
    ],
  },
  {
    proofData: {
      token: "3,836.537598 YAY",
      address: "0xbdda50183d817c3289f895a4472eb475967dc980",
      network: "bscan.ru",
      textCopy: "Copied",
    },
    wrappedData: [
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
      },
      {
        token: "3,836.537598 YAY",
        address: "0xbdda50183d817c3289f895a4472eb475967dc980",
        network: "bscan.ru",
        textCopy: "Copied",
      },
    ],
  },
];
const texts = {
  title: "Proof of Assets",
  description: "You can view all on-chain behaviors of AVAX token and locked native token assets on this page",
};

const textsProof = {
  proof: "Proof of Asset",
  wrapped: "Wrapped Token",
};

const useBridgeModal = (): ReturnType => {
  const [onPresentBridgeModal] = useModal(
    <BridgeProof
      addTokenHandler={() => {}}
      BSCSkanHandler={() => {}}
      onDismiss={() => {}}
      texts={texts}
      textsProof={textsProof}
      ProofOfAssetsData={ProofOfAssetsData}
    />
  );
  return { onPresentBridgeModal };
};

export default useBridgeModal;
