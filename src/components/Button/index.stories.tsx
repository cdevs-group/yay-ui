import React from "react";
import { BrowserRouter } from "react-router-dom";
import styled from "styled-components";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {},
};

const Row = styled.div`
  margin-bottom: 32px;
  & > button + button,
  & > a + a {
    margin-left: 16px;
  }
`;

// export const Default: React.FC = () => {
//   return (
//     <>
//       <div>
//         <button type="button">Unstyled Button</button>
//       </div>
//       <div>
//         {Object.values(variants).map((variant) => {
//           return (
//             <div key={variant}>
//               {Object.values(scales).map((scale) => {
//                 return (
//                   <Button key={scale} variant={variant} scale={scale} mr="8px">
//                     {`${capitalize(variant)} ${scale.toUpperCase()}`}
//                   </Button>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//       <div>
//         <Button mr="8px" disabled>
//           Disabled
//         </Button>
//         <Button variant="secondary" disabled>
//           Disabled
//         </Button>
//       </div>
//     </>
//   );
// };

// export const Anchors: React.FC = () => {
//   return (
//     <>
//       <div>
//         {Object.values(variants).map((variant) => {
//           return (
//             <div key={variant}>
//               {Object.values(scales).map((scale) => {
//                 return (
//                   <Button
//                     as="a"
//                     href="https://pancakeswap.finance"
//                     key={scale}
//                     variant={variant}
//                     scale={scale}
//                     external
//                     mr="8px"
//                   >
//                     {`${capitalize(variant)} anchor ${scale.toUpperCase()}`}
//                   </Button>
//                 );
//               })}
//             </div>
//           );
//         })}
//       </div>
//       <div>
//         <Button as="a" href="https://pancakeswap.finance" mr="8px" external disabled>
//           Disabled
//         </Button>
//         <Button as="a" href="https://pancakeswap.finance" variant="secondary" external disabled>
//           Disabled
//         </Button>
//         <Button width='100%' variant='pink'>sedfdsfdsf</Button>

//       </div>
//     </>
//   );
// };

export const Variants: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Row>
          <Button width='170px' scale='md' variant='green'>
            Button
      </Button>
          <Button width='170px' disabled scale='md' variant='green'>
            Button
      </Button>
          <Button width='170px' scale='md' variant='option'>
            Button
      </Button>
        </Row>
        <Row>
          <Button width='170px' scale='md' variant='pink'>
            Button
      </Button>
          <Button width='170px' disabled scale='md' variant='pink'>
            Button
      </Button>
          <Button width='300px' spin scale='md' variant='green'>
          Collect Winnings 
      </Button>
        </Row>
        <Row>
          <Button width='130px' scale='sm' variant='green'>
            Button
      </Button>
          <Button width='130px' scale='sm' disabled variant='green'>
            Button
      </Button>
          <Button width='130px' scale='sm' variant='pink'>
            Button
      </Button>
          <Button width='130px' scale='sm' disabled variant='pink'>
            Button
      </Button>
          <Button width='130px' scale='sm' variant='option'>
            Button
      </Button>
        </Row>
        <Row>
        </Row>

      </BrowserRouter>
    </div>
  );
};

// let orangeAnimation = keyframes`
//   0% { transform: rotate(360deg); },
//    100% { transform: rotate(360deg); }
// `;


// const ButtonSpin = styled(Button)`
//   & svg path{
//     transform-origin: center center;
//     animation: ${orangeAnimation} 1.5s infinite;
//   }
// `;