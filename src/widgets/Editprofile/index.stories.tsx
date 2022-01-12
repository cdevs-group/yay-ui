import React, { useState } from "react";
import EditProfile from "./EditProfile";
import styled from "styled-components";
import ChooseAvatarModal from "./Components/ChooseAvatarModal";
import { EXAMPLE_AVATAR } from "../../constants/images";

export default {
  title: "Widgets/EditProfile",
};

export const EditProfileBlock = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const texts = {
    title: "Edit profile",
    description:
      "You can set preferred display name, create your branded profile URL and manage other personal settings",
    avatarTitle: "Profile Image",
    avatarDescription: "We recommend an image of at least 300x300",
    avatarButton: "Schoose NFTs",
    uploadButton: "Update profile",
    nameDescription: "You can change your display name once for free",
    nameTitle: "Display name",
    inputPlaceholder: "Enter your display name",
  };

  const nftsList = [
    {
      value: "as",
      img: EXAMPLE_AVATAR,
    },
    {
      value: "asas",
      img: EXAMPLE_AVATAR,
    },
  ];

  return (
    <>
      <EditProfile
        texts={texts}
        inputHandle={(e: any) => null}
        avatarHandle={() => setModalOpen(true)}
        updateHandle={() => console.log("click")}
        inputValue=""
        inputName="name"
        avatarButtonProps={{ spin: false, disabled: true }}
        updateButtonProps={{ spin: true, disabled: false }}
      />
      <Overlay open={modalOpen} />
      <ModalWrapper open={modalOpen}>
        <ChooseAvatarModal
          handleImgSelect={(e?: string) => console.log("select")}
          nftsList={nftsList}
          togglePage={async (e: any) => setCurrentPage(+e.target.value)}
          currentPage={currentPage}
          length={20}
          onDismiss={() => setModalOpen(false)}
        />
      </ModalWrapper>
    </>
  );
};
const ModalWrapper = styled.div<{ open?: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: ${({ open }) => (open ? 16 : -2)};
  opacity: ${({ open }) => (open ? 1 : 0)};
`;
const Overlay = styled.div<{ open?: boolean }>`
  pointer-events: none;
  display: block;
  background: ${({ theme }) => theme.colors.overlayBg};
  position: fixed;
  z-index: ${({ open }) => (open ? 15 : -2)};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
`;
