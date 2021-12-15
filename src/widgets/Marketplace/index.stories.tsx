import React from "react";
import CollectionItem from "./components/CollectionItem";
import { NFT_EXAMPLE } from "../../constants/images";

export default {
  title: "Widgets/Marketplace",
};

export const CollectionItemBlock = () => (
  <CollectionItem data={{ name: "Passage", price: "$3,512,645", index: 1, img: NFT_EXAMPLE }} />
);
