import React from "react";
import Flex from "../../components/Box/Flex";
import CongratulateModal from "./CongratulateModal";

export default {
  title: "Widgets/CongratulateModal",
  argTypes: {},
};

export const Welcome: React.FC = () => {
  return (
    <Flex>
      <div style={{ marginRight: 50 }}>
        <CongratulateModal
          title="Congratulate"
          description={<>You're on the list of the first! <br></br> See you soon, our friend!</>}
          buttonText="Let’s play!"
        />
      </div>      
    </Flex>
  );
};
