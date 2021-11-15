// import React, { useState } from "react";
// import { BNB } from "../../constants/images";
// import CurrencySearchModal from "./CurrencySearchModal";

// export default {
//   title: "Components/CurrencySearchModal",
//   component: CurrencySearchModal,
//   argTypes: {},
// };

// export const CurrencySearchModalBlock: React.FC = () => {
//   const [value, onUserInput] = useState<string>("");

//   const onMax = () => {
//     console.log("max");
//   };

//   const onPresentCurrencyModal = () => {
//     console.log("onPresentCurrencyModal");
//   };
//   return (
//     <div>
//       <CurrencySearchModal
//         value={value}
//         onUserInput={onUserInput}
//         onMax={onMax}
//         showMaxButton
//         label="Input"
//         currency={{ decimals: 18, name: "BNB", symbol: "BNB" }}
//         disableCurrencySelect={false}
//         pair={null}
//         hideInput={false}
//         id="id"
//         account="lndvjkdnvjud3rt45532"
//         onPresentCurrencyModal={onPresentCurrencyModal}
//         сurrencyLogo={<img src={BNB} style={{ marginRight: "8px" }} />}
//         doubleCurrencyLogo={<img src={BNB} style={{ marginRight: "8px" }} />}
//         texts={{
//           translatedLabel: "From",
//           balance: "Balance: 0.0345151",
//           numericalInputTitle: "Title",
//           max: "MAX",
//           currencySelect: "BNB",
//         }}
//       />
//     </div>
//   );
// };
