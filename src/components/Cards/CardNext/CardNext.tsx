import React from "react";
// import { Button } from "../../Button";
// import { BetPosition } from "../../Card/types";
// import { Timer } from "../../Timer";
// import ButtonsBlock from "./ButtonsBlock";
// import TopContent from "./TopContent";
// import ValueRow from "./ValueRow";

// interface IProps {
//   roundEpoch: string
//   time: number
//   payoutWin: string
//   payoutLose: string
//   handleSetPosition: (newPosition: BetPosition) => void
//   targetRef: any
//   disabledButtons: boolean
// }

// const CardNext: React.FC<IProps> = ({roundEpoch, time, payoutWin, payoutLose, handleSetPosition, targetRef}) => {
//   return (
//     <>
//       <TopContent rightContent={roundEpoch}>
//         <Timer color="white" time={time} />
//       </TopContent>
//       <ValueRow vector="UP" value={payoutWin} />

//       <ButtonsBlock betMethod={state.betMethod} pool={`${getPrizePoolAmount(round.totalAmount)} BNB`}>
//         <>
//           {canEnterPosition ? (
//             <>
//               <Button
//                 variant="green"
//                 width="100%"
//                 onClick={() => handleSetPosition(BetPosition.BULL)}
//                 disabled={!canEnterPosition || isBufferPhase}
//                 mb="14px"
//               >
//                 UP
//               </Button>
//               <Button
//                 variant="pink"
//                 width="100%"
//                 onClick={() => handleSetPosition(BetPosition.BEAR)}
//                 disabled={!canEnterPosition || isBufferPhase}
//               >
//                 DOWN
//               </Button>
//             </>
//           ) : (
//             <div ref={targetRef} style={{ marginTop: 70 }}>
//               <Button disabled startIcon={getPositionEnteredIcon()} width="100%" mb="8px" variant="green">
//                 {t("%position% Entered", { position: positionDisplay })}
//               </Button>
//             </div>
//           )}
//         </>
//       </ButtonsBlock>
//       <ValueRow vector="DOWN" value={payoutLose} />
//     </>
//   );
// };

// export default CardNext;
