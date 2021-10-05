import React from "react";
import { useModal } from "../../Modal";
import LobbyResultModal from "./LobbyResultModal";

interface ReturnType {
  onLobbyResultModal: () => void;
}
interface IText {
  title: string;
  content: string;
  textButton: string;
}
const useLobbyResultModal = (texts: IText, handleButton: () => void, img: string): ReturnType => {
  const [onLobbyResultModal] = useModal(<LobbyResultModal texts={texts} handleButton={handleButton} img={img} />);
  return { onLobbyResultModal };
};

export default useLobbyResultModal;
