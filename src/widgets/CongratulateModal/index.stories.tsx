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
          title="YAAAAAY!"
          description={
            <>
              You are on the first list! see you, <br></br>my dear friend!
            </>
          }
          buttonText="Go to Marketplace"
          hrefLink="#"
        />
      </div>
    </Flex>
  );
};
