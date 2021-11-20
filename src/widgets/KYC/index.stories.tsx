import React, { useState } from "react";
import styled from "styled-components";
import KYCSteps from "./KYCSteps";
import StepWrapper from "./components/StepWrapper";
import { OneGhost, WALLET_KYC } from "../../constants/images";
import LoaderSmall from "../../components/Loader/LoaderSmall";
import StepWrapperFrame from "./components/StepWrapperFrame";
import { StatusKYC } from "./types";

export default {
  title: "Widgets/KYC",
  argTypes: {},
};

export const KYCPage = () => {
  const texts = {
    step: "Step",
    description1: "Verifiy your wallet!",
    description2: "KYC verification",
    description3: "Smart contract verification",
  };

  const textsStep1 = {
    title: "Verifiy your wallet!",
    button: "Verify",
    description: "Verify you wallet",
  };
  const errorText = {
    title: "Error!",
    button: "Send message",
    description: "Your KYC Verification is declined!",
    description2: "Please visit our support chat for assistance: https://t.me/avalaunchsupport",
  };

  const textsFrame = {
    title: "Individual KYC Verification",
    description:
      "Each account has 1 KYC credit. If your verification fails, please contact an admin for more information before submitting again.",
    button: "Start KYC",
    placeholder: "dsgdfg",
  };
  const [isFrame, setFrame] = useState(false);

  return (
    <Wrapper>
      <KYCSteps status1={StatusKYC.COMPLETED} status2={StatusKYC.FAIL} status3={StatusKYC.NONE} texts={texts} />
      <div style={{ marginTop: "67px" }}>
        <div style={{ margin: "30px", width: "338px" }}>
          <StepWrapper
            content={
              <div>
                <img src={WALLET_KYC} />
              </div>
            }
            texts={textsStep1}
            onClick={() => console.log("click")}
          />
        </div>

        <div style={{ margin: "0 30px", width: "fit-content" }}>
          <StepWrapper
            href="www.yandex.ru"
            content={
              <div>
                <img src={OneGhost} />
              </div>
            }
            texts={errorText}
            onClick={() => console.log("click")}
          />
        </div>
        <div style={{ margin: "30px", width: "338px" }}>
          <StepWrapper
            content={
              <div style={{ height: "150px", display: "flex", justifyContent: "center", alignItems: "center" }}>
                <LoaderSmall />
              </div>
            }
            texts={textsStep1}
            onClick={() => console.log("click")}
          />
        </div>
      </div>
      <div style={{ margin: "30px" }}>
        <StepWrapperFrame
          textError="Please, enter valid e-mail"
          onChange={(e) => console.log(e)}
          name="email"
          value=""
          isFrame={isFrame}
          texts={textsFrame}
          onClick={() => setFrame(true)}
        />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div``;
