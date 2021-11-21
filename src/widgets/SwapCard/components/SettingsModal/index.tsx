import React, { useState } from "react";
import SettingsModal from "./SettingsModal";

const GlobalSettings = () => {
  const [showExpertModeAcknowledgement, setShowExpertModeAcknowledgement] = useState(true);
  const [expertMode, toggleExpertMode] = useState(false);
  const [singleHopOnly, setSingleHopOnly] = useState(false);
  const [slippageInput, setSlippageInput] = useState("");
  const [deadlineInput, setDeadlineInput] = useState("");
  const [showConfirmExpertModal, setShowConfirmExpertModal] = useState(false);
  const [activeTabGas, setActiveTabGas] = useState<number>(0);
  const [activeTabSlippage, setActiveTabSlippage] = useState<number | null>(null);

  const handleSlippageInput = (e: any) => {
    setSlippageInput(e.target.value);
  };

  const handleDeadlineInput = (e: any) => {
    setDeadlineInput(e.target.value);
  };

  const toggleTabGas = async (e: any) => {
    setActiveTabGas(+e.target.value);
  };
  const toggleTabSlippage = async (e: any) => {
    setActiveTabSlippage(+e.target.value);
  };
  const texts = {
    settings: "Settings",
    slippageTollerance: "Slippage Tolerance",
    disableMultihops: "Disable Multihops",
    funSoudsToMake: "Fun sounds to make a truly immersive pancake-flipping trading experience",
    expertModeDescription:
      "Expert mode turns off the 'Confirm' transaction prompt, and allows high slippage trades that often result in bad rates and lost funds.",
    onlyUseThis: "Only use this mode if you know what you’re doing.",
    turnOnExpert: "Turn On Expert Mode",
    enterValidSlippage: "Enter a valid slippage percentage",
    transactionMayFail: "Your transaction may fail",
    transactionMayFront: "Your transaction may be frontrun",
    txDeadline: "Tx deadline (mins)",
    yourTransactionRevent: "Your transaction will revert if it is left confirming for longer than this time.",
    defaultTransaction: "Default Transaction Speed",
    adjustGasPrice:
      "Adjusts the gas price (transaction fee) for your transaction. Higher GWEI = higher speed = higher fees",
    expert: "Expert Mode",
    dontAskAgain: "Don’t show this again",
    pleaseTypeThe: 'Please type the word "confirm" to enable expert mode.',
  };

  const slippageTabs = ["0.1%", "0.5%", "1.0%"];
  const gasTabs = ["Standard (5)", "Fast (6)", "Instant (7)"];
  const [isRememberChecked, setIsRememberChecked] = useState(false);

  return (
    <div>
      <SettingsModal
        onDismiss={() => null}
        slippageTabs={slippageTabs}
        gasTabs={gasTabs}
        showExpertModeAcknowledgement={showExpertModeAcknowledgement}
        setShowExpertModeAcknowledgement={setShowExpertModeAcknowledgement}
        expertMode={expertMode}
        toggleExpertMode={toggleExpertMode}
        singleHopOnly={singleHopOnly}
        setSingleHopOnly={setSingleHopOnly}
        texts={texts}
        showConfirmExpertModal={showConfirmExpertModal}
        setShowConfirmExpertModal={setShowConfirmExpertModal}
        isRememberChecked={isRememberChecked}
        setIsRememberChecked={setIsRememberChecked}
        activeTabGas={activeTabGas}
        activeTabSlippage={activeTabSlippage}
        toggleTabGas={toggleTabGas}
        toggleTabSlippage={toggleTabSlippage}
        slippageInput={slippageInput}
        deadlineInput={deadlineInput}
        handleSlippageInput={handleSlippageInput}
        handleDeadlineInput={handleDeadlineInput}
      />
    </div>
  );
};

export default GlobalSettings;
