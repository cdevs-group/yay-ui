import React from "react";
import Card from "./Card";
import ExpiredCardNA from "./ExpiredCardNA";
// import LoaderCard from "./LoaderCard/LoaderCard";
// import NewMainCard from "./NewMainCard";
// import NewRateCard from "./NewRateCard";
// import NewThirdCard from "./NewThirdCard";
// import NewUpDownCard from "./NewUpDownCard";
// import NewWinCard from "./NewWinCard";

export default {
  title: "Components/Card",
  component: [ExpiredCardNA],
  argTypes: {},
};



export const ExpiredNA: React.FC = () => {
  return (
    <div style={{ padding: "32px", width: "500px" }}>
      <Card active="false">
        <ExpiredCardNA/>
      </Card>
    </div>
  );
};

// export const ThirdCardNew: React.FC = () => {
//   return (
//     <div style={{ padding: "32px", width: "500px" }}>
//       <Card >
//         <NewThirdCard/>
//       </Card>
//     </div>
//   );
// };

// export const WinCardNew: React.FC = () => {
//   return (
//     <div style={{ padding: "32px", width: "500px" }}>
//       <Card >
//         <NewWinCard/>
//       </Card>
//     </div>
//   );
// };

// export const RateCardNew: React.FC = () => {
//   return (
//     <div style={{ padding: "32px", width: "500px" }}>
//       <Card >
//         <NewRateCard/>
//       </Card>
//     </div>
//   );
// };

// export const UpDownCardNew: React.FC = () => {
//   return (
//     <div style={{ padding: "32px", width: "500px" }}>
//       <Card >
//         <NewUpDownCard/>
//       </Card>
//     </div>
//   );
// };

// export const Loader: React.FC = () => {
//   return (
//     <div style={{ padding: "32px", width: "500px" }}>
//       <Card>
//         <LoaderCard/>
//       </Card>
//     </div>
//   );
// };
