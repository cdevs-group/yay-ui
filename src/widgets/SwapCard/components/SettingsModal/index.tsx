import React, { useState } from "react";
import SettingsModal from "./SettingsModal";

const GlobalSettings = () => {
  const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useState(false);
  const [expertMode, toggleExpertMode] = useState(false);
  const [singleHopOnly, setSingleHopOnly] = useState(false);
  const [userSlippageTolerance, setUserSlippageTolerance] = useState(100);
  const [ttl, setTtl] = useState(100);
  const [slippageInput, setSlippageInput] = useState("");
  const [deadlineInput, setDeadlineInput] = useState("");
  const [gasPrice, setGasPrice] = useState<string>("");
  const texts = {
    global: "Global",
    settings: "Settings",
    swapLiquid: "Swaps & Liquidity",
    bypasses: "Bypasses confirmation modals and allows high slippage trades. Use at your own risk.",
    disableMultihops: "Disable Multihops",
    restricsSwaps: "Restricts swaps to direct pairs only.",
    funSoudsToMake: "Fun sounds to make a truly immersive pancake-flipping trading experience",
    expertMode: "Expert Mode",
    expertModeDescription:
      "Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.",
    onlyUseThis: "Only use this mode if you know what you’re doing.",
    pleaseTypeThe: 'Please type the word "confirm" to enable expert mode.',
    turnOnExpert: "Turn On Expert Mode",
    settingsHightSplippage:
      "Setting a high slippage tolerance can help transactions succeed, but you may not get such a good price. Use with caution.",
    enterValidSlippage: "Enter a valid slippage percentage",
    transactionMayFail: "Your transaction may fail",
    transactionMayFront: "Your transaction may be frontrun",
    txDeadline: "Tx deadline (mins)",
    yourTransactionRevent: "Your transaction will revert if it is left confirming for longer than this time.",
    defaultTransaction: "Default Transaction Speed (GWEI)",
    adjustGasPrice:
      "Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees",
    standard: "Standard (%gasPrice%)",
    fast: "Fast (%gasPrice%)",
    instant: "Instant (%gasPrice%)",
  };

  return (
    <div>
      <SettingsModal
        showExpertModeAcknowledgement={showExpertModeAcknowledgement}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
        expertMode={expertMode}
        toggleExpertMode={toggleExpertMode}
        singleHopOnly={singleHopOnly}
        setSingleHopOnly={setSingleHopOnly}
        userSlippageTolerance={userSlippageTolerance}
        setUserSlippageTolerance={setUserSlippageTolerance}
        ttl={ttl}
        setTtl={setTtl}
        slippageInput={slippageInput}
        setSlippageInput={setSlippageInput}
        texts={texts}
        deadlineInput={deadlineInput}
        setDeadlineInput={setDeadlineInput}
        gasPrice={gasPrice}
        setGasPrice={setGasPrice}
      />
    </div>
  );
};

export default GlobalSettings;
